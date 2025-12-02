/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa6';
import { IoRocketOutline } from 'react-icons/io5';
import { BsGripVertical, BsCaretDownFill } from 'react-icons/bs';
import { FaCheckCircle, FaBan } from 'react-icons/fa';
import { setQuizzes, addQuiz } from './reducer';
import * as client from './client';
import QuizContextMenu from './QuizContextMenu';

const formatDate = (dateString: string) => {
  if (!dateString) return 'Not set';
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

const getAvailabilityStatus = (quiz: any) => {
  const now = new Date();
  const availableDate = quiz.availableDate
    ? new Date(quiz.availableDate)
    : null;
  const availableUntilDate = quiz.availableUntilDate
    ? new Date(quiz.availableUntilDate)
    : null;

  if (availableUntilDate && now > availableUntilDate) {
    return 'Closed';
  }
  if (availableDate && now < availableDate) {
    return `Not available until ${formatDate(quiz.availableDate)}`;
  }
  return 'Available';
};

export default function Quizzes() {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isStudent = currentUser?.role === 'STUDENT';
  const dispatch = useDispatch();

  const { quizzes } = useSelector(
    (state: { quizzesReducer: { quizzes: any[] } }) => state.quizzesReducer
  );

  const fetchQuizzes = async () => {
    const fetchedQuizzes = await client.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(fetchedQuizzes));
  };

  useEffect(() => {
    fetchQuizzes();
  }, [cid]);

  const handleAddQuiz = async () => {
    const newQuiz = await client.createQuiz(cid as string, {
      title: 'New Quiz',
      published: false,
    });
    dispatch(addQuiz(newQuiz));
    router.push(`/Courses/${cid}/Quizzes/${newQuiz._id}/Editor`);
  };

  const onDeleteQuiz = async (quizId: string) => {
    await client.deleteQuiz(quizId);
    dispatch(setQuizzes(quizzes.filter((q: any) => q._id !== quizId)));
  };

  const handleDelete = (quizId: string, quizTitle: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove the quiz "${quizTitle}"?`
    );
    if (confirmed) {
      onDeleteQuiz(quizId);
    }
  };

  const handlePublishToggle = async (quiz: any) => {
    const updatedQuiz = await client.publishQuiz(quiz._id, !quiz.published);
    dispatch(
      setQuizzes(
        quizzes.map((q: any) => (q._id === quiz._id ? updatedQuiz : q))
      )
    );
  };

  const sortedQuizzes = [...quizzes].sort((a, b) => {
    const dateA = a.availableDate ? new Date(a.availableDate).getTime() : 0;
    const dateB = b.availableDate ? new Date(b.availableDate).getTime() : 0;
    return dateA - dateB;
  });

  return (
    <div id="wd-quizzes">
      <div className="mb-3 clearfix">
        {!isStudent && (
          <Button
            id="wd-add-quiz"
            variant="danger"
            size="lg"
            className="float-end ms-2 text-nowrap border wd-header-action"
            onClick={handleAddQuiz}
          >
            <FaPlus
              className="me-2 position-relative"
              style={{ bottom: '1px' }}
            />
            Quiz
          </Button>
        )}
      </div>

      {quizzes.length === 0 ? (
        <div className="text-center p-5 text-muted">
          <IoRocketOutline size={48} className="mb-3" />
          <p className="fs-5">No quizzes yet.</p>
          {!isStudent && (
            <p>Click the &quot;+ Quiz&quot; button to add a new quiz.</p>
          )}
        </div>
      ) : (
        <>
          <div className="d-flex align-items-center justify-content-between mt-4 mb-0 p-3 ps-2 bg-secondary border">
            <h5 className="m-0 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-5" />
              <BsCaretDownFill className="me-2" />
              Assignment Quizzes
            </h5>
          </div>
          <ListGroup id="wd-quiz-list" className="rounded-0">
            {sortedQuizzes.map((quiz) => (
              <ListGroupItem
                key={quiz._id}
                className="wd-quiz-list-item p-3 ps-1 d-flex align-items-center"
                style={{ borderLeft: '4px solid #198754' }}
              >
                <BsGripVertical className="me-2 fs-3 text-secondary" />
                <IoRocketOutline className="text-success me-3 fs-4" />
                <div className="flex-fill">
                  <Link
                    href={`/Courses/${cid}/Quizzes/${quiz._id}`}
                    className="wd-quiz-link fw-bold text-decoration-none text-dark"
                  >
                    {quiz.title}
                  </Link>
                  <div className="text-muted small mt-1">
                    <span
                      className={
                        getAvailabilityStatus(quiz) === 'Closed'
                          ? 'text-danger'
                          : getAvailabilityStatus(quiz) === 'Available'
                          ? 'text-success'
                          : ''
                      }
                    >
                      {getAvailabilityStatus(quiz)}
                    </span>{' '}
                    | <strong>Due</strong> {formatDate(quiz.dueDate)} |{' '}
                    {quiz.points || 0} pts | {quiz.questionCount || 0} questions
                    {isStudent && quiz.latestScore !== undefined && (
                      <>
                        {' '}
                        | <strong>Score:</strong> {quiz.latestScore}/
                        {quiz.points}
                      </>
                    )}
                  </div>
                </div>
                <div className="ms-2 d-flex align-items-center">
                  {!isStudent && (
                    <>
                      {quiz.published ? (
                        <FaCheckCircle
                          className="text-success me-3 fs-5"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handlePublishToggle(quiz)}
                          title="Click to unpublish"
                        />
                      ) : (
                        <FaBan
                          className="text-secondary me-3 fs-5"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handlePublishToggle(quiz)}
                          title="Click to publish"
                        />
                      )}
                      <QuizContextMenu
                        quiz={quiz}
                        cid={cid as string}
                        onDelete={handleDelete}
                        onPublishToggle={handlePublishToggle}
                      />
                    </>
                  )}
                  {isStudent && quiz.published && (
                    <FaCheckCircle className="text-success me-3 fs-5" />
                  )}
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </>
      )}
    </div>
  );
}
