/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Card, Alert, Badge } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import * as client from '../../../client';

export default function AttemptResults() {
  const { cid, qid, attemptId } = useParams();
  const router = useRouter();
  const [attempt, setAttempt] = useState<any>(null);
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attemptData = await client.findAttemptById(attemptId as string);
        const quizData = await client.findQuizById(qid as string);
        const questionsData = await client.findQuestionsForQuiz(qid as string);
        setAttempt(attemptData);
        setQuiz(quizData);
        setQuestions(questionsData);
      } catch (error) {
        console.error('Error fetching attempt:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [attemptId, qid]);

  if (loading) {
    return <div className="p-4">Loading results...</div>;
  }

  if (!attempt || !quiz) {
    return (
      <div className="p-4">
        <Alert variant="danger">Results not found.</Alert>
        <Button
          variant="secondary"
          onClick={() => router.push(`/Courses/${cid}/Quizzes`)}
        >
          Back to Quizzes
        </Button>
      </div>
    );
  }

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);
  const percentage =
    totalPoints > 0 ? Math.round((attempt.score / totalPoints) * 100) : 0;
  const passed = percentage >= 70;

  // Helper to get student's answer for a question
  const getStudentAnswer = (questionId: string) => {
    return attempt.answers?.find((a: any) => a.question === questionId);
  };

  // Helper to format the student's answer for display
  const formatAnswer = (question: any, answerRecord: any) => {
    if (!answerRecord || answerRecord.answer === undefined) {
      return <span className="text-muted">No answer provided</span>;
    }

    if (question.questionType === 'Multiple Choice') {
      const choiceIndex = answerRecord.answer;
      const choice = question.choices?.[choiceIndex];
      return choice?.text || `Choice ${choiceIndex + 1}`;
    } else if (question.questionType === 'True/False') {
      return answerRecord.answer ? 'True' : 'False';
    } else if (question.questionType === 'Fill in the Blank') {
      return answerRecord.answer || 'No answer';
    }
    return String(answerRecord.answer);
  };

  // Helper to get the correct answer for display
  const formatCorrectAnswer = (question: any) => {
    if (question.questionType === 'Multiple Choice') {
      const correct = question.choices?.find((c: any) => c.isCorrect);
      return correct?.text || 'Not set';
    } else if (question.questionType === 'True/False') {
      return question.correctAnswer ? 'True' : 'False';
    } else if (question.questionType === 'Fill in the Blank') {
      return question.correctAnswers?.join(' or ') || 'Not set';
    }
    return 'Unknown';
  };

  // Check if we should show correct answers based on quiz settings
  const shouldShowCorrectAnswers = () => {
    if (quiz.showCorrectAnswers === 'Always') return true;
    if (quiz.showCorrectAnswers === 'After Submission') return true;
    if (quiz.showCorrectAnswers === 'After Due Date') {
      return quiz.dueDate && new Date() > new Date(quiz.dueDate);
    }
    return false;
  };

  const showCorrect = shouldShowCorrectAnswers();

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h2>{quiz.title}</h2>
          <p className="text-muted mb-0">
            Submitted: {new Date(attempt.submittedAt).toLocaleString()}
          </p>
          <p className="text-muted">Attempt #{attempt.attemptNumber}</p>
        </div>
        <Button
          variant="outline-secondary"
          onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}`)}
        >
          Back to Quiz
        </Button>
      </div>

      {/* Score Card */}
      <Card className={`mb-4 ${passed ? 'border-success' : 'border-warning'}`}>
        <Card.Body className="text-center py-4">
          <h3>Your Score</h3>
          <p
            className={`display-4 ${passed ? 'text-success' : 'text-warning'}`}
          >
            {attempt.score} / {totalPoints}
          </p>
          <Badge bg={passed ? 'success' : 'warning'} className="fs-5 px-4 py-2">
            {percentage}%
          </Badge>
        </Card.Body>
      </Card>

      {/* Questions Review */}
      <h4 className="mb-3">Your Answers</h4>
      {questions.map((question, idx) => {
        const answerRecord = getStudentAnswer(question._id);
        const isCorrect = answerRecord?.isCorrect;

        return (
          <Card
            key={question._id}
            className={`mb-3 ${isCorrect ? 'border-success' : 'border-danger'}`}
          >
            <Card.Header
              className={`d-flex justify-content-between align-items-center ${
                isCorrect ? 'bg-success' : 'bg-danger'
              } text-white`}
            >
              <span>
                <strong>Question {idx + 1}</strong>
                <Badge bg="light" text="dark" className="ms-2">
                  {question.questionType}
                </Badge>
              </span>
              <span className="d-flex align-items-center">
                {isCorrect ? (
                  <>
                    <FaCheck className="me-2" /> Correct
                  </>
                ) : (
                  <>
                    <FaTimes className="me-2" /> Incorrect
                  </>
                )}
                <span className="ms-3">
                  {isCorrect ? question.points : 0} / {question.points} pts
                </span>
              </span>
            </Card.Header>
            <Card.Body>
              <p className="fw-bold">{question.title}</p>
              <p>{question.question}</p>

              <hr />

              <p>
                <strong>Your Answer:</strong>{' '}
                <span className={isCorrect ? 'text-success' : 'text-danger'}>
                  {formatAnswer(question, answerRecord)}
                </span>
              </p>

              {showCorrect && !isCorrect && (
                <p className="text-success">
                  <strong>Correct Answer:</strong>{' '}
                  {formatCorrectAnswer(question)}
                </p>
              )}

              {/* Show all choices for multiple choice */}
              {question.questionType === 'Multiple Choice' && showCorrect && (
                <div className="mt-3">
                  <p className="mb-2">
                    <strong>All Choices:</strong>
                  </p>
                  <ul className="list-unstyled">
                    {question.choices?.map((choice: any, cidx: number) => {
                      const wasSelected = answerRecord?.answer === cidx;
                      return (
                        <li
                          key={cidx}
                          className={`mb-1 ${
                            choice.isCorrect
                              ? 'text-success fw-bold'
                              : wasSelected
                              ? 'text-danger'
                              : ''
                          }`}
                        >
                          {choice.isCorrect && '✓ '}
                          {wasSelected && !choice.isCorrect && '✗ '}
                          {choice.text}
                          {choice.isCorrect && ' (Correct)'}
                          {wasSelected && !choice.isCorrect && ' (Your answer)'}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </Card.Body>
          </Card>
        );
      })}

      {/* Footer */}
      <div className="d-flex justify-content-between mt-4">
        <Button
          variant="outline-secondary"
          onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}`)}
        >
          Back to Quiz Details
        </Button>
        <Button
          variant="primary"
          onClick={() => router.push(`/Courses/${cid}/Quizzes`)}
        >
          Back to All Quizzes
        </Button>
      </div>
    </div>
  );
}
