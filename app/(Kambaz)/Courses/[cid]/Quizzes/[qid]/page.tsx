/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useParams, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button, Card, Row, Col, Table, Badge } from 'react-bootstrap';
import { FaCheckCircle, FaBan } from 'react-icons/fa';
import * as client from '../client';

const formatDate = (dateString: string) => {
  if (!dateString) return 'Not set';
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export default function QuizDetails() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === 'FACULTY';
  const isStudent = currentUser?.role === 'STUDENT';
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [attempts, setAttempts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quizData = await client.findQuizById(qid as string);
        const questionsData = await client.findQuestionsForQuiz(qid as string);
        setQuiz(quizData);
        setQuestions(questionsData);

        // Fetch attempts for students
        if (currentUser?.role === 'STUDENT') {
          const attemptsData = await client.findAttemptsForQuiz(qid as string);
          setAttempts(attemptsData);
        }
      } catch (error) {
        console.error('Error fetching quiz:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [qid, currentUser?.role]);

  const handlePublishToggle = async () => {
    const updatedQuiz = await client.publishQuiz(quiz._id, !quiz.published);
    setQuiz(updatedQuiz);
  };

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!quiz) {
    return <div className="p-4">Quiz not found.</div>;
  }

  return (
    <div className="p-3">
      {/* Header with buttons */}
      <div className="d-flex justify-content-center gap-2 mb-4">
        {isFaculty && (
          <>
            <Button
              variant={quiz.published ? 'success' : 'secondary'}
              onClick={handlePublishToggle}
            >
              {quiz.published ? (
                <>
                  <FaCheckCircle className="me-2" />
                  Published
                </>
              ) : (
                <>
                  <FaBan className="me-2" />
                  Unpublished
                </>
              )}
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                router.push(`/Courses/${cid}/Quizzes/${qid}/Preview`)
              }
            >
              Preview
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                router.push(`/Courses/${cid}/Quizzes/${qid}/Editor`)
              }
            >
              Edit
            </Button>
          </>
        )}
      </div>

      <hr />

      {/* Quiz Title */}
      <h2 className="mb-4">{quiz.title}</h2>

      {/* Quiz Properties */}
      <Card className="mb-4">
        <Card.Body>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Quiz Type</strong>
            </Col>
            <Col sm={8}>{quiz.quizType || 'Graded Quiz'}</Col>
          </Row>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Points</strong>
            </Col>
            <Col sm={8}>{totalPoints}</Col>
          </Row>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Assignment Group</strong>
            </Col>
            <Col sm={8}>{quiz.assignmentGroup || 'Quizzes'}</Col>
          </Row>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Shuffle Answers</strong>
            </Col>
            <Col sm={8}>{quiz.shuffleAnswers ? 'Yes' : 'No'}</Col>
          </Row>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Time Limit</strong>
            </Col>
            <Col sm={8}>
              {quiz.timeLimit ? `${quiz.timeLimit} Minutes` : 'No time limit'}
            </Col>
          </Row>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Multiple Attempts</strong>
            </Col>
            <Col sm={8}>{quiz.multipleAttempts ? 'Yes' : 'No'}</Col>
          </Row>
          {quiz.multipleAttempts && (
            <Row className="mb-2">
              <Col sm={4} className="text-end">
                <strong>How Many Attempts</strong>
              </Col>
              <Col sm={8}>{quiz.attemptsAllowed || 1}</Col>
            </Row>
          )}
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Show Correct Answers</strong>
            </Col>
            <Col sm={8}>{quiz.showCorrectAnswers || 'Never'}</Col>
          </Row>
          {quiz.accessCode && (
            <Row className="mb-2">
              <Col sm={4} className="text-end">
                <strong>Access Code</strong>
              </Col>
              <Col sm={8}>{quiz.accessCode}</Col>
            </Row>
          )}
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>One Question at a Time</strong>
            </Col>
            <Col sm={8}>{quiz.oneQuestionAtATime ? 'Yes' : 'No'}</Col>
          </Row>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Webcam Required</strong>
            </Col>
            <Col sm={8}>{quiz.webcamRequired ? 'Yes' : 'No'}</Col>
          </Row>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Lock Questions After Answering</strong>
            </Col>
            <Col sm={8}>{quiz.lockQuestionsAfterAnswering ? 'Yes' : 'No'}</Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Dates */}
      <Card className="mb-4">
        <Card.Header>
          <strong>Dates</strong>
        </Card.Header>
        <Card.Body>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Due</strong>
            </Col>
            <Col sm={8}>{formatDate(quiz.dueDate)}</Col>
          </Row>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Available from</strong>
            </Col>
            <Col sm={8}>{formatDate(quiz.availableDate)}</Col>
          </Row>
          <Row className="mb-2">
            <Col sm={4} className="text-end">
              <strong>Until</strong>
            </Col>
            <Col sm={8}>{formatDate(quiz.availableUntilDate)}</Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Description */}
      {quiz.description && (
        <Card className="mb-4">
          <Card.Header>
            <strong>Description</strong>
          </Card.Header>
          <Card.Body>
            <p className="mb-0">{quiz.description}</p>
          </Card.Body>
        </Card>
      )}

      {/* Questions Summary */}
      <Card className="mb-4">
        <Card.Header>
          <strong>Questions</strong>
        </Card.Header>
        <Card.Body>
          <p className="mb-0">
            {questions.length} question{questions.length !== 1 ? 's' : ''} |{' '}
            {totalPoints} point{totalPoints !== 1 ? 's' : ''}
          </p>
        </Card.Body>
      </Card>

      {/* Student Attempts History */}
      {isStudent && attempts.length > 0 && (
        <Card className="mb-4">
          <Card.Header>
            <strong>Your Attempts</strong>
          </Card.Header>
          <Card.Body className="p-0">
            <Table hover className="mb-0">
              <thead>
                <tr>
                  <th>Attempt</th>
                  <th>Score</th>
                  <th>Submitted</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((attempt: any) => (
                  <tr key={attempt._id}>
                    <td>Attempt #{attempt.attemptNumber}</td>
                    <td>
                      <Badge
                        bg={
                          attempt.score >= totalPoints / 2
                            ? 'success'
                            : 'warning'
                        }
                      >
                        {attempt.score} / {totalPoints}
                      </Badge>
                    </td>
                    <td>{formatDate(attempt.submittedAt)}</td>
                    <td>
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() =>
                          router.push(
                            `/Courses/${cid}/Quizzes/${qid}/Attempt/${attempt._id}`
                          )
                        }
                      >
                        View Results
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {/* Remaining Attempts Info */}
      {isStudent && quiz.published && (
        <Card className="mb-4">
          <Card.Body className="text-center">
            {quiz.multipleAttempts ? (
              <>
                <p className="mb-2">
                  Attempts used: <strong>{attempts.length}</strong> /{' '}
                  <strong>{quiz.attemptsAllowed}</strong>
                </p>
                {attempts.length < quiz.attemptsAllowed ? (
                  <Button
                    variant="danger"
                    onClick={() =>
                      router.push(`/Courses/${cid}/Quizzes/${qid}/Take`)
                    }
                  >
                    {attempts.length === 0 ? 'Start Quiz' : 'Take Again'}
                  </Button>
                ) : (
                  <p className="text-muted mb-0">
                    You have used all your attempts.
                  </p>
                )}
              </>
            ) : (
              <>
                {attempts.length === 0 ? (
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={() =>
                      router.push(`/Courses/${cid}/Quizzes/${qid}/Take`)
                    }
                  >
                    Start Quiz
                  </Button>
                ) : (
                  <p className="text-muted mb-0">
                    You have already completed this quiz.
                  </p>
                )}
              </>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
