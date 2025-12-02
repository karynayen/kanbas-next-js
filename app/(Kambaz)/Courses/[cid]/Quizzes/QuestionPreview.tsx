/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Card, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface QuestionPreviewProps {
  question: any;
  questionNumber: number;
  onEdit: () => void;
  onDelete: () => void;
}

export default function QuestionPreview({
  question,
  questionNumber,
  onEdit,
  onDelete,
}: QuestionPreviewProps) {
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between align-items-center bg-light">
        <div>
          <span className="fw-bold">Question {questionNumber}</span>
          <span className="badge bg-secondary ms-2">
            {question.questionType}
          </span>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-3">{question.points} pts</span>
          <Button
            variant="link"
            size="sm"
            className="p-1 text-secondary"
            onClick={onEdit}
            title="Edit question"
          >
            <FaEdit />
          </Button>
          <Button
            variant="link"
            size="sm"
            className="p-1 text-danger"
            onClick={onDelete}
            title="Delete question"
          >
            <FaTrash />
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <p className="fw-bold mb-2">{question.title}</p>
        <p className="text-muted">{question.question || 'No question text'}</p>

        {question.questionType === 'Multiple Choice' && question.choices && (
          <ul className="list-unstyled mb-0">
            {question.choices.map((choice: any, idx: number) => (
              <li
                key={idx}
                className={`mb-1 ${
                  choice.isCorrect ? 'text-success fw-bold' : ''
                }`}
              >
                {choice.isCorrect ? '✓ ' : '○ '}
                {choice.text || `Option ${idx + 1}`}
              </li>
            ))}
          </ul>
        )}

        {question.questionType === 'True/False' && (
          <p className="mb-0">
            Correct Answer:{' '}
            <strong className="text-success">
              {question.correctAnswer ? 'True' : 'False'}
            </strong>
          </p>
        )}

        {question.questionType === 'Fill in the Blank' &&
          question.correctAnswers && (
            <p className="mb-0">
              Correct Answers:{' '}
              <strong className="text-success">
                {question.correctAnswers.join(', ') || 'None set'}
              </strong>
            </p>
          )}
      </Card.Body>
    </Card>
  );
}
