/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useParams, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button, Card, Form, Alert, ListGroup } from 'react-bootstrap';
import * as client from '../../client';

export default function QuizTake() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [attempt, setAttempt] = useState<any>(null);
  const [answers, setAnswers] = useState<any>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const initQuiz = async () => {
      try {
        const quizData = await client.findQuizById(qid as string);
        const questionsData = await client.findQuestionsForQuiz(qid as string);
        setQuiz(quizData);
        setQuestions(questionsData);

        // Start new attempt
        const newAttempt = await client.startQuizAttempt(qid as string);
        setAttempt(newAttempt);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Cannot take this quiz');
      } finally {
        setLoading(false);
      }
    };
    initQuiz();
  }, [qid]);

  const handleSubmit = async () => {
    if (submitting) return;

    const confirmed = window.confirm(
      'Are you sure you want to submit this quiz? You cannot change your answers after submission.'
    );
    if (!confirmed) return;

    setSubmitting(true);
    try {
      const answersArray = questions.map((q) => ({
        questionId: q._id,
        answer: answers[q._id],
        choiceIndex:
          q.questionType === 'Multiple Choice' ? answers[q._id] : undefined,
      }));

      const result = await client.submitAttempt(attempt._id, answersArray);
      router.push(`/Courses/${cid}/Quizzes/${qid}/Attempt/${result._id}`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error submitting quiz');
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="p-4">Loading quiz...</div>;
  }

  if (error) {
    return (
      <div className="p-4">
        <Alert variant="danger">
          <Alert.Heading>Cannot Take Quiz</Alert.Heading>
          <p>{error}</p>
        </Alert>
        <Button
          variant="secondary"
          onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}`)}
        >
          Back to Quiz Details
        </Button>
      </div>
    );
  }

  if (!quiz || questions.length === 0) {
    return (
      <div className="p-4">
        <Alert variant="warning">This quiz has no questions.</Alert>
        <Button
          variant="secondary"
          onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}`)}
        >
          Back to Quiz Details
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="d-flex">
      {/* Main Quiz Area */}
      <div
        className="flex-grow-1 p-3"
        style={{ maxWidth: 'calc(100% - 250px)' }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>{quiz.title}</h3>
          <span className="badge bg-secondary fs-6">
            Attempt #{attempt?.attemptNumber || 1}
          </span>
        </div>

        {quiz.timeLimit > 0 && (
          <Alert variant="info" className="py-2">
            ⏱️ Time Limit: {quiz.timeLimit} minutes
          </Alert>
        )}

        <hr />

        <Card className="mb-3">
          <Card.Header className="d-flex justify-content-between bg-light">
            <span>
              <strong>Question {currentQuestionIndex + 1}</strong> of{' '}
              {questions.length}
            </span>
            <span>{currentQuestion.points} pts</span>
          </Card.Header>
          <Card.Body>
            <p className="fw-bold fs-5">{currentQuestion.title}</p>
            <p className="mb-4">{currentQuestion.question}</p>

            {/* Multiple Choice */}
            {currentQuestion.questionType === 'Multiple Choice' && (
              <div>
                {currentQuestion.choices?.map((choice: any, idx: number) => (
                  <Form.Check
                    key={idx}
                    type="radio"
                    id={`choice-${currentQuestion._id}-${idx}`}
                    name={`question-${currentQuestion._id}`}
                    label={choice.text || `Option ${idx + 1}`}
                    checked={answers[currentQuestion._id] === idx}
                    onChange={() =>
                      setAnswers({
                        ...answers,
                        [currentQuestion._id]: idx,
                      })
                    }
                    className="mb-2 p-2 border rounded"
                    style={{ marginLeft: 0 }}
                  />
                ))}
              </div>
            )}

            {/* True/False */}
            {currentQuestion.questionType === 'True/False' && (
              <div>
                <Form.Check
                  type="radio"
                  id={`true-${currentQuestion._id}`}
                  name={`question-${currentQuestion._id}`}
                  label="True"
                  checked={answers[currentQuestion._id] === true}
                  onChange={() =>
                    setAnswers({
                      ...answers,
                      [currentQuestion._id]: true,
                    })
                  }
                  className="mb-2 p-2 border rounded"
                  style={{ marginLeft: 0 }}
                />
                <Form.Check
                  type="radio"
                  id={`false-${currentQuestion._id}`}
                  name={`question-${currentQuestion._id}`}
                  label="False"
                  checked={answers[currentQuestion._id] === false}
                  onChange={() =>
                    setAnswers({
                      ...answers,
                      [currentQuestion._id]: false,
                    })
                  }
                  className="p-2 border rounded"
                  style={{ marginLeft: 0 }}
                />
              </div>
            )}

            {/* Fill in the Blank */}
            {currentQuestion.questionType === 'Fill in the Blank' && (
              <Form.Control
                type="text"
                placeholder="Type your answer here..."
                value={answers[currentQuestion._id] || ''}
                onChange={(e) =>
                  setAnswers({
                    ...answers,
                    [currentQuestion._id]: e.target.value,
                  })
                }
                size="lg"
              />
            )}
          </Card.Body>
        </Card>

        <div className="d-flex justify-content-between">
          <Button
            variant="outline-secondary"
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          >
            ← Previous
          </Button>

          <div>
            {currentQuestionIndex < questions.length - 1 && (
              <Button
                variant="primary"
                onClick={() =>
                  setCurrentQuestionIndex(currentQuestionIndex + 1)
                }
                className="me-2"
              >
                Next →
              </Button>
            )}
            <Button
              variant="danger"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Quiz'}
            </Button>
          </div>
        </div>
      </div>

      {/* Question Navigation Sidebar */}
      <div
        className="border-start p-3 bg-light"
        style={{ width: '250px', minHeight: '100vh' }}
      >
        <h6>Questions</h6>
        <ListGroup>
          {questions.map((q, idx) => (
            <ListGroup.Item
              key={q._id}
              active={idx === currentQuestionIndex}
              onClick={() => setCurrentQuestionIndex(idx)}
              style={{ cursor: 'pointer' }}
              className="d-flex justify-content-between align-items-center"
            >
              <span>Question {idx + 1}</span>
              {answers[q._id] !== undefined && (
                <span className="badge bg-success">✓</span>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}
