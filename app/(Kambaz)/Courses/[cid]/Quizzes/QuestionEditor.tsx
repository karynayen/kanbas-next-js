/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { FaPlus, FaTrash } from 'react-icons/fa';

interface QuestionEditorProps {
  question: any;
  questionNumber: number;
  onSave: (question: any) => void;
  onCancel: () => void;
}

export default function QuestionEditor({
  question,
  questionNumber,
  onSave,
  onCancel,
}: QuestionEditorProps) {
  const [title, setTitle] = useState(question.title || '');
  const [questionText, setQuestionText] = useState(question.question || '');
  const [points, setPoints] = useState(question.points || 1);
  const [questionType, setQuestionType] = useState(
    question.questionType || 'Multiple Choice'
  );

  // Multiple choice state
  const [choices, setChoices] = useState(
    question.choices || [
      { text: '', isCorrect: true },
      { text: '', isCorrect: false },
    ]
  );

  // True/False state
  const [correctAnswer, setCorrectAnswer] = useState(
    question.correctAnswer ?? true
  );

  // Fill in blank state
  const [correctAnswers, setCorrectAnswers] = useState<string[]>(
    question.correctAnswers || ['']
  );

  const handleSave = () => {
    const updatedQuestion: any = {
      ...question,
      title,
      question: questionText,
      points,
      questionType,
    };

    if (questionType === 'Multiple Choice') {
      updatedQuestion.choices = choices;
      updatedQuestion.correctAnswer = undefined;
      updatedQuestion.correctAnswers = undefined;
    } else if (questionType === 'True/False') {
      updatedQuestion.correctAnswer = correctAnswer;
      updatedQuestion.choices = undefined;
      updatedQuestion.correctAnswers = undefined;
    } else if (questionType === 'Fill in the Blank') {
      updatedQuestion.correctAnswers = correctAnswers.filter(
        (a) => a.trim() !== ''
      );
      updatedQuestion.choices = undefined;
      updatedQuestion.correctAnswer = undefined;
    }

    onSave(updatedQuestion);
  };

  const handleAddChoice = () => {
    setChoices([...choices, { text: '', isCorrect: false }]);
  };

  const handleRemoveChoice = (index: number) => {
    if (choices.length > 2) {
      const wasCorrect = choices[index].isCorrect;
      const newChoices = choices.filter((_: any, i: number) => i !== index);
      if (wasCorrect && newChoices.length > 0) {
        newChoices[0].isCorrect = true;
      }
      setChoices(newChoices);
    }
  };

  const handleChoiceTextChange = (index: number, text: string) => {
    setChoices(
      choices.map((c: any, i: number) => (i === index ? { ...c, text } : c))
    );
  };

  const handleCorrectChoiceChange = (index: number) => {
    setChoices(
      choices.map((c: any, i: number) => ({
        ...c,
        isCorrect: i === index,
      }))
    );
  };

  const handleAddAnswer = () => {
    setCorrectAnswers([...correctAnswers, '']);
  };

  const handleRemoveAnswer = (index: number) => {
    if (correctAnswers.length > 1) {
      setCorrectAnswers(correctAnswers.filter((_, i) => i !== index));
    }
  };

  const handleAnswerChange = (index: number, value: string) => {
    setCorrectAnswers(correctAnswers.map((a, i) => (i === index ? value : a)));
  };

  return (
    <Card className="mb-3 border-primary">
      <Card.Header className="bg-light">
        <Row className="align-items-center">
          <Col>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Question Title"
              className="fw-bold"
            />
          </Col>
          <Col xs="auto">
            <Form.Select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              style={{ width: '180px' }}
            >
              <option value="Multiple Choice">Multiple Choice</option>
              <option value="True/False">True/False</option>
              <option value="Fill in the Blank">Fill in the Blank</option>
            </Form.Select>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <span className="me-2">pts:</span>
            <Form.Control
              type="number"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              min={0}
              style={{ width: '80px' }}
            />
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {/* Question Text */}
        <Form.Group className="mb-4">
          <Form.Label>
            <strong>Question:</strong>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter your question text..."
          />
        </Form.Group>

        {/* Multiple Choice Options */}
        {questionType === 'Multiple Choice' && (
          <div>
            <Form.Label>
              <strong>Answers:</strong>
            </Form.Label>
            {choices.map((choice: any, idx: number) => (
              <div key={idx} className="d-flex align-items-center gap-2 mb-2">
                <Form.Check
                  type="radio"
                  name={`correctAnswer-${question._id}`}
                  checked={choice.isCorrect}
                  onChange={() => handleCorrectChoiceChange(idx)}
                  title="Mark as correct answer"
                />
                <Form.Control
                  type="text"
                  value={choice.text}
                  onChange={(e) => handleChoiceTextChange(idx, e.target.value)}
                  placeholder={
                    choice.isCorrect ? 'Correct Answer' : 'Possible Answer'
                  }
                  className={choice.isCorrect ? 'border-success' : ''}
                />
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleRemoveChoice(idx)}
                  disabled={choices.length <= 2}
                  title="Remove option"
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={handleAddChoice}
              className="mt-2"
            >
              <FaPlus className="me-1" />
              Add Another Answer
            </Button>
          </div>
        )}

        {/* True/False Options */}
        {questionType === 'True/False' && (
          <div>
            <Form.Label>
              <strong>Correct Answer:</strong>
            </Form.Label>
            <div>
              <Form.Check
                type="radio"
                id={`true-${question._id}`}
                name={`trueFalse-${question._id}`}
                label="True"
                checked={correctAnswer === true}
                onChange={() => setCorrectAnswer(true)}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id={`false-${question._id}`}
                name={`trueFalse-${question._id}`}
                label="False"
                checked={correctAnswer === false}
                onChange={() => setCorrectAnswer(false)}
              />
            </div>
          </div>
        )}

        {/* Fill in Blank Options */}
        {questionType === 'Fill in the Blank' && (
          <div>
            <Form.Label>
              <strong>Possible Correct Answers:</strong>
            </Form.Label>
            <Form.Text className="d-block mb-2 text-muted">
              Add all acceptable answers. Answers are case-insensitive.
            </Form.Text>
            {correctAnswers.map((answer, idx) => (
              <div key={idx} className="d-flex align-items-center gap-2 mb-2">
                <Form.Control
                  type="text"
                  value={answer}
                  onChange={(e) => handleAnswerChange(idx, e.target.value)}
                  placeholder={`Correct answer ${idx + 1}`}
                />
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleRemoveAnswer(idx)}
                  disabled={correctAnswers.length <= 1}
                  title="Remove answer"
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={handleAddAnswer}
              className="mt-2"
            >
              <FaPlus className="me-1" />
              Add Another Answer
            </Button>
          </div>
        )}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end gap-2 bg-light">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSave}>
          Update Question
        </Button>
      </Card.Footer>
    </Card>
  );
}
