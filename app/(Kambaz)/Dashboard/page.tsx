/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import * as client from '../Courses/client';
import * as enrollmentClient from './client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  FormControl,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
} from '../Courses/reducer';
import {
  enrollInCourse,
  setEnrollments,
  unenrollFromCourse,
} from '../Database/reducer';

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const fetchEnrollments = async () => {
    if (!currentUser) return;
    const enrollments = await enrollmentClient.findEnrollmentsForUser(
      currentUser._id
    );
    dispatch(setEnrollments(enrollments));
  };

  useEffect(() => {
    if (currentUser) {
      fetchEnrollments();
    }
  }, [currentUser]);

  const fetchCourses = async () => {
    try {
      let courses;
      if (showAllCourses) {
        // Fetch ALL courses when in Enrollments mode
        courses = await client.fetchAllCourses();
      } else {
        // Fetch only user's enrolled courses when in My Courses mode
        courses = await client.findMyCourses();
      }
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser, showAllCourses]);

  const [course, setCourse] = useState<any>({
    _id: '0',
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
    image: '/images/reactjs.jpg',
    description: 'New Description',
  });

  const isFaculty = currentUser?.role === 'FACULTY';

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some((enrollment: any) => {
      return (
        enrollment.user === currentUser._id &&
        enrollment.course._id === courseId
      );
    });
  };

  const handleEnroll = async (courseId: string) => {
    if (!currentUser) return;
    try {
      const enrollment = await enrollmentClient.enrollIntoCourse(
        currentUser._id,
        courseId
      );
      dispatch(enrollInCourse(enrollment));
      await fetchEnrollments();
      await fetchCourses();
    } catch (error) {
      console.error('Failed to enroll:', error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    if (!currentUser) return;
    try {
      await enrollmentClient.unenrollFromCourse(currentUser._id, courseId);
      dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
      await fetchEnrollments();
      await fetchCourses();
    } catch (error) {
      console.error('Failed to unenroll:', error);
    }
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(
      setCourses(courses.filter((course: any) => course._id !== courseId))
    );
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c: any) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        {!isFaculty && (
          <Button
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="float-end"
            variant="primary"
          >
            {showAllCourses ? 'My Courses' : 'Enrollments'}
          </Button>
        )}
      </h1>
      <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              {' '}
              Add{' '}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse}
              id="wd-update-course-click"
            >
              Update{' '}
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{' '}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: '300px' }}
            >
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    src="/images/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}{' '}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: '100px' }}
                    >
                      {course.description}{' '}
                    </CardText>
                    <Button variant="primary"> Go </Button>
                    {isFaculty && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            onDeleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                    {!isFaculty && showAllCourses && (
                      <>
                        {isEnrolled(course._id) ? (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleUnenroll(course._id);
                            }}
                            className="btn btn-danger float-end"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleEnroll(course._id);
                            }}
                            className="btn btn-success float-end"
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
