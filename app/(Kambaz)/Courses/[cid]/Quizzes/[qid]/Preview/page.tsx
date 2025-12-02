/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useParams, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button, Card, ListGroup, Form, Alert } from 'react-bootstrap';
import * as client from '../../client';

export default function QuizPreview() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  // Redirect students away from preview
  useEffect(() => {
    if (currentUser?.role === 'STUDENT') {
      router.push(`/Courses/${cid}/Quizzes/${qid}`);
    }
  }, [currentUser, cid, qid, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quizData = await client.findQuizById(qid as string);
        const questionsData = await client.findQuestionsForQuiz(qid as string);
        setQuiz(quizData);
        setQuestions(questionsData);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [qid]);

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((q) => {
      const answer = answers[q._id];
      let isCorrect = false;

      if (q.questionType === 'Multiple Choice') {
        isCorrect = q.choices[answer]?.isCorrect || false;
      } else if (q.questionType === 'True/False') {
        isCorrect = q.correctAnswer === answer;
      } else if (q.questionType === 'Fill in the Blank') {
        const studentAnswer = (answer || '').toLowerCase().trim();
        isCorrect = q.correctAnswers?.some(
          (ca: string) => ca.toLowerCase().trim() === studentAnswer
        );
      }

      if (isCorrect) totalScore += q.points || 0;
    });

    setScore(totalScore);
    setShowResults(true);
  };

  const getAnswerStatus = (questionId: string) => {
    const question = questions.find((q) => q._id === questionId);
    const answer = answers[questionId];

    if (answer === undefined) return null;

    let isCorrect = false;
    if (question.questionType === 'Multiple Choice') {
      isCorrect = question.choices[answer]?.isCorrect || false;
    } else if (question.questionType === 'True/False') {
      isCorrect = question.correctAnswer === answer;
    } else if (question.questionType === 'Fill in the Blank') {
      const studentAnswer = (answer || '').toLowerCase().trim();
      isCorrect = question.correctAnswers?.some(
        (ca: string) => ca.toLowerCase().trim() === studentAnswer
      );
    }

    return isCorrect;
  };

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);

  if (currentUser?.role === 'STUDENT') {
    return (
      <div className="p-4">
        <Alert variant="danger">
          You do not have permission to preview quizzes.
        </Alert>
      </div>
    );
  }

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!quiz || questions.length === 0) {
    return (
      <div className="p-4">
        <Alert variant="warning">
          No questions in this quiz. Please add questions first.
        </Alert>
        <Button
          variant="secondary"
          onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}/Editor`)}
        >
          Go to Editor
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
        <Alert variant="info" className="mb-3">
          <strong>Quiz Preview</strong> - This is a preview of the published
          version of the quiz. Answers are NOT saved.
        </Alert>

        <h3>{quiz.title}</h3>
        <p className="text-muted">Started: {new Date().toLocaleString()}</p>

        <hr />

        {!showResults ? (
          <>
            <Card className="mb-3">
              <Card.Header className="d-flex justify-content-between">
                <span>
                  <strong>Question {currentQuestionIndex + 1}</strong>
                </span>
                <span>{currentQuestion.points} pts</span>
              </Card.Header>
              <Card.Body>
                <p className="fw-bold">{currentQuestion.title}</p>
                <p>{currentQuestion.question}</p>

                {/* Multiple Choice */}
                {currentQuestion.questionType === 'Multiple Choice' && (
                  <div>
                    {currentQuestion.choices?.map(
                      (choice: any, idx: number) => (
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
                          className="mb-2"
                        />
                      )
                    )}
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
                      className="mb-2"
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
                  />
                )}
              </Card.Body>
            </Card>

            <div className="d-flex justify-content-between">
              <Button
                variant="secondary"
                disabled={currentQuestionIndex === 0}
                onClick={() =>
                  setCurrentQuestionIndex(currentQuestionIndex - 1)
                }
              >
                ← Previous
              </Button>
              {currentQuestionIndex === questions.length - 1 ? (
                <Button variant="danger" onClick={handleSubmit}>
                  Submit Quiz
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex + 1)
                  }
                >
                  Next →
                </Button>
              )}
            </div>
          </>
        ) : (
          /* Results View */
          <div>
            <Alert variant={score >= totalPoints / 2 ? 'success' : 'warning'}>
              <h4>Quiz Results</h4>
              <p className="fs-4 mb-0">
                Score: <strong>{score}</strong> / {totalPoints} points
              </p>
            </Alert>

            <h5 className="mt-4">Review Answers:</h5>
            {questions.map((q, idx) => {
              const isCorrect = getAnswerStatus(q._id);
              return (
                <Card
                  key={q._id}
                  className={`mb-3 ${
                    isCorrect ? 'border-success' : 'border-danger'
                  }`}
                >
                  <Card.Header
                    className={`d-flex justify-content-between ${
                      isCorrect
                        ? 'bg-success text-white'
                        : 'bg-danger text-white'
                    }`}
                  >
                    <span>Question {idx + 1}</span>
                    <span>{isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                  </Card.Header>
                  <Card.Body>
                    <p className="fw-bold">{q.title}</p>
                    <p>{q.question}</p>
                    <p>
                      <strong>Your Answer:</strong>{' '}
                      {q.questionType === 'Multiple Choice'
                        ? q.choices[answers[q._id]]?.text || 'No answer'
                        : q.questionType === 'True/False'
                        ? answers[q._id] === true
                          ? 'True'
                          : answers[q._id] === false
                          ? 'False'
                          : 'No answer'
                        : answers[q._id] || 'No answer'}
                    </p>
                    {!isCorrect && (
                      <p className="text-success">
                        <strong>Correct Answer:</strong>{' '}
                        {q.questionType === 'Multiple Choice'
                          ? q.choices.find((c: any) => c.isCorrect)?.text
                          : q.questionType === 'True/False'
                          ? q.correctAnswer
                            ? 'True'
                            : 'False'
                          : q.correctAnswers?.join(' or ')}
                      </p>
                    )}
                  </Card.Body>
                </Card>
              );
            })}

            <Button
              variant="secondary"
              onClick={() => {
                setShowResults(false);
                setAnswers({});
                setCurrentQuestionIndex(0);
              }}
            >
              Try Again
            </Button>
          </div>
        )}

        <hr className="mt-4" />
        <Button
          variant="outline-secondary"
          onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}/Editor`)}
        >
          ✏️ Keep Editing This Quiz
        </Button>
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
              active={idx === currentQuestionIndex && !showResults}
              onClick={() => !showResults && setCurrentQuestionIndex(idx)}
              style={{ cursor: showResults ? 'default' : 'pointer' }}
              className="d-flex justify-content-between align-items-center"
            >
              <span>Question {idx + 1}</span>
              {answers[q._id] !== undefined && !showResults && (
                <span className="text-success">✓</span>
              )}
              {showResults && (
                <span
                  className={
                    getAnswerStatus(q._id) ? 'text-success' : 'text-danger'
                  }
                >
                  {getAnswerStatus(q._id) ? '✓' : '✗'}
                </span>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}
