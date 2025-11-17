/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { BsCalendar } from 'react-icons/bs';
import { useParams, useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addAssignment, updateAssignment } from '../reducer';

const formatDateForInput = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector(
    (state: {
      assignmentsReducer: {
        assignments: Array<{
          _id: string;
          title: string;
          course: string;
          description: string;
          points: number;
          dueDate: string;
          availableFromDate: string;
          availableUntilDate: string;
        }>;
      };
    }) => state.assignmentsReducer
  );
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isNewAssignment = aid === 'new';
  const existingAssignment = !isNewAssignment
    ? assignments.find((a) => a._id === aid)
    : null;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState('2024-05-13T23:59');
  const [availableFromDate, setAvailableFromDate] =
    useState('2024-05-06T00:00');
  const [availableUntilDate, setAvailableUntilDate] =
    useState('2024-05-20T23:59');

  useEffect(() => {
    if (existingAssignment) {
      setTitle(existingAssignment.title);
      setDescription(existingAssignment.description);
      setPoints(existingAssignment.points);
      setDueDate(formatDateForInput(existingAssignment.dueDate));
      setAvailableFromDate(
        formatDateForInput(existingAssignment.availableFromDate)
      );
      setAvailableUntilDate(
        formatDateForInput(existingAssignment.availableUntilDate)
      );
    }
  }, [existingAssignment]);

  const handleSave = () => {
    const assignmentData = {
      _id: existingAssignment?._id,
      title,
      course: cid,
      description,
      points,
      dueDate: new Date(dueDate).toISOString(),
      availableFromDate: new Date(availableFromDate).toISOString(),
      availableUntilDate: new Date(availableUntilDate).toISOString(),
    };

    if (isNewAssignment) {
      dispatch(addAssignment(assignmentData));
    } else {
      dispatch(updateAssignment(assignmentData));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="wd-description">
          <Form.Control
            as="textarea"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Row className="g-3 align-items-start">
          <Col md={3} className="text-md-end">
            <Form.Label className="mt-2">Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              id="wd-points"
              type="number"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              className="w-100"
            />
          </Col>

          <Col md={3} className="text-md-end">
            <Form.Label className="mt-2">Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select
              id="wd-group"
              defaultValue="ASSIGNMENTS"
              className="w-100"
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </Form.Select>
          </Col>

          <Col md={3} className="text-md-end">
            <Form.Label className="mt-2">Display Grade as</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select
              id="wd-display-grade-as"
              defaultValue="PERCENTAGE"
              className="w-100"
            >
              <option value="PERCENTAGE">Percentage</option>
              <option value="DECIMAL">Decimal</option>
            </Form.Select>
          </Col>

          <Col md={3} className="text-md-end">
            <Form.Label className="mt-2">Submission Type</Form.Label>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <Form.Select
                id="wd-submission-type"
                defaultValue="ONLINE"
                className="mb-3 w-100"
              >
                <option value="ONLINE">Online</option>
                <option value="INPERSON">In Person</option>
              </Form.Select>

              <div className="mb-2 fw-semibold">Online Entry Options</div>
              <div className="d-flex flex-column gap-2">
                <Form.Check
                  id="wd-text-entry"
                  type="checkbox"
                  label="Text Entry"
                />
                <Form.Check
                  id="wd-website-url"
                  type="checkbox"
                  label="Website URL"
                  defaultChecked
                />
                <Form.Check
                  id="wd-media-recordings"
                  type="checkbox"
                  label="Media Recordings"
                />
                <Form.Check
                  id="wd-student-annotation"
                  type="checkbox"
                  label="Student Annotation"
                />
                <Form.Check
                  id="wd-file-upload"
                  type="checkbox"
                  label="File Uploads"
                />
              </div>
            </div>
          </Col>

          <Col md={3} className="text-md-end">
            <Form.Label className="mt-2">Assign</Form.Label>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <Form.Group className="mb-3" controlId="wd-assign-to">
                <Form.Label className="fw-bold fs-5">Assign to</Form.Label>
                <div className="form-control d-flex align-items-center py-2">
                  <span className="bg-light rounded-3 px-3 py-1 d-inline-flex align-items-center">
                    <span className="me-3">Everyone</span>
                    <span className="text-secondary">×</span>
                  </span>
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-due-date">
                <Form.Label className="fw-semibold">Due</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="datetime-local"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                  <InputGroup.Text className="bg-light">
                    <BsCalendar className="text-secondary" />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Row className="g-3">
                <Col md={6}>
                  <Form.Group controlId="wd-available-from">
                    <Form.Label className="fw-semibold">
                      Available from
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="datetime-local"
                        value={availableFromDate}
                        onChange={(e) => setAvailableFromDate(e.target.value)}
                      />
                      <InputGroup.Text className="bg-light">
                        <BsCalendar className="text-secondary" />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label className="fw-semibold">Until</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="datetime-local"
                        value={availableUntilDate}
                        onChange={(e) => setAvailableUntilDate(e.target.value)}
                      />
                      <InputGroup.Text className="bg-light">
                        <BsCalendar className="text-secondary" />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />
        <div className="text-end">
          <Button
            id="wd-cancel"
            variant="secondary"
            className="me-2"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button id="wd-save" variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
