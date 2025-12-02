/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useParams, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Form, Button, Nav, Tab, Row, Col, Card, Alert } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import * as client from '../../client';
import QuestionPreview from '../../QuestionPreview';
import QuestionEditor from '../../QuestionEditor';

const formatDateForInput = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export default function QuizEditor() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [activeTab, setActiveTab] = useState('details');
  const [loading, setLoading] = useState(true);

  // Quiz form fields - all hooks must be called before any conditional returns
  const [title, setTitle] = useState('New Quiz');
  const [description, setDescription] = useState('');
  const [quizType, setQuizType] = useState('Graded Quiz');
  const [assignmentGroup, setAssignmentGroup] = useState('Quizzes');
  const [shuffleAnswers, setShuffleAnswers] = useState(true);
  const [timeLimit, setTimeLimit] = useState(20);
  const [hasTimeLimit, setHasTimeLimit] = useState(true);
  const [multipleAttempts, setMultipleAttempts] = useState(false);
  const [attemptsAllowed, setAttemptsAllowed] = useState(1);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState('Never');
  const [accessCode, setAccessCode] = useState('');
  const [oneQuestionAtATime, setOneQuestionAtATime] = useState(true);
  const [webcamRequired, setWebcamRequired] = useState(false);
  const [lockQuestionsAfterAnswering, setLockQuestionsAfterAnswering] =
    useState(false);
  const [dueDate, setDueDate] = useState('');
  const [availableDate, setAvailableDate] = useState('');
  const [availableUntilDate, setAvailableUntilDate] = useState('');

  // Questions state
  const [questions, setQuestions] = useState<any[]>([]);
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(
    null
  );

  // Redirect students away from editor
  useEffect(() => {
    if (currentUser?.role === 'STUDENT') {
      router.push(`/Courses/${cid}/Quizzes/${qid}`);
    }
  }, [currentUser, cid, qid, router]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const quiz = await client.findQuizById(qid as string);
        setTitle(quiz.title || 'New Quiz');
        setDescription(quiz.description || '');
        setQuizType(quiz.quizType || 'Graded Quiz');
        setAssignmentGroup(quiz.assignmentGroup || 'Quizzes');
        setShuffleAnswers(quiz.shuffleAnswers ?? true);
        setTimeLimit(quiz.timeLimit || 20);
        setHasTimeLimit(quiz.timeLimit > 0);
        setMultipleAttempts(quiz.multipleAttempts ?? false);
        setAttemptsAllowed(quiz.attemptsAllowed || 1);
        setShowCorrectAnswers(quiz.showCorrectAnswers || 'Never');
        setAccessCode(quiz.accessCode || '');
        setOneQuestionAtATime(quiz.oneQuestionAtATime ?? true);
        setWebcamRequired(quiz.webcamRequired ?? false);
        setLockQuestionsAfterAnswering(
          quiz.lockQuestionsAfterAnswering ?? false
        );
        setDueDate(formatDateForInput(quiz.dueDate));
        setAvailableDate(formatDateForInput(quiz.availableDate));
        setAvailableUntilDate(formatDateForInput(quiz.availableUntilDate));

        const questionsData = await client.findQuestionsForQuiz(qid as string);
        setQuestions(questionsData);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [qid]);

  // Check student permission after all hooks
  if (currentUser?.role === 'STUDENT') {
    return (
      <div className="p-4">
        <Alert variant="danger">
          You do not have permission to edit quizzes.
        </Alert>
      </div>
    );
  }

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);

  const handleSave = async (publish = false) => {
    const quizData = {
      _id: qid,
      title,
      description,
      quizType,
      assignmentGroup,
      shuffleAnswers,
      timeLimit: hasTimeLimit ? timeLimit : 0,
      multipleAttempts,
      attemptsAllowed,
      showCorrectAnswers,
      accessCode,
      oneQuestionAtATime,
      webcamRequired,
      lockQuestionsAfterAnswering,
      dueDate: dueDate ? new Date(dueDate).toISOString() : null,
      availableDate: availableDate
        ? new Date(availableDate).toISOString()
        : null,
      availableUntilDate: availableUntilDate
        ? new Date(availableUntilDate).toISOString()
        : null,
    };

    await client.updateQuiz(quizData);

    if (publish) {
      await client.publishQuiz(qid as string, true);
      router.push(`/Courses/${cid}/Quizzes`);
    } else {
      router.push(`/Courses/${cid}/Quizzes/${qid}`);
    }
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Quizzes`);
  };

  // Question handlers
  const handleAddQuestion = async () => {
    const newQuestion = await client.createQuestion(qid as string, {
      title: 'New Question',
      questionType: 'Multiple Choice',
      points: 1,
      question: '',
      choices: [
        { text: '', isCorrect: true },
        { text: '', isCorrect: false },
      ],
    });
    setQuestions([...questions, newQuestion]);
    setEditingQuestionId(newQuestion._id);
  };

  const handleSaveQuestion = async (question: any) => {
    const updatedQuestion = await client.updateQuestion(question);
    setQuestions(
      questions.map((q) => (q._id === question._id ? updatedQuestion : q))
    );
    setEditingQuestionId(null);
  };

  const handleDeleteQuestion = async (questionId: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );
    if (confirmed) {
      await client.deleteQuestion(questionId);
      setQuestions(questions.filter((q) => q._id !== questionId));
    }
  };

  const handleCancelEdit = () => {
    setEditingQuestionId(null);
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-3">
      <Tab.Container
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k || 'details')}
      >
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="details">Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="questions">Questions</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          {/* DETAILS TAB */}
          <Tab.Pane eventKey="details">
            <Form>
              {/* Title */}
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              {/* Description */}
              <Form.Group className="mb-3">
                <Form.Label>Quiz Instructions</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter quiz instructions or description..."
                />
              </Form.Group>

              <Row className="mb-3">
                {/* Quiz Type */}
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Quiz Type</Form.Label>
                    <Form.Select
                      value={quizType}
                      onChange={(e) => setQuizType(e.target.value)}
                    >
                      <option value="Graded Quiz">Graded Quiz</option>
                      <option value="Practice Quiz">Practice Quiz</option>
                      <option value="Graded Survey">Graded Survey</option>
                      <option value="Ungraded Survey">Ungraded Survey</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                {/* Assignment Group */}
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Assignment Group</Form.Label>
                    <Form.Select
                      value={assignmentGroup}
                      onChange={(e) => setAssignmentGroup(e.target.value)}
                    >
                      <option value="Quizzes">Quizzes</option>
                      <option value="Exams">Exams</option>
                      <option value="Assignments">Assignments</option>
                      <option value="Project">Project</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              {/* Points (read-only) */}
              <Form.Group className="mb-3">
                <Form.Label>Points</Form.Label>
                <Form.Control
                  type="number"
                  value={totalPoints}
                  readOnly
                  disabled
                />
                <Form.Text className="text-muted">
                  Points are automatically calculated from questions
                </Form.Text>
              </Form.Group>

              <Card className="mb-3">
                <Card.Header>Options</Card.Header>
                <Card.Body>
                  {/* Shuffle Answers */}
                  <Form.Check
                    type="checkbox"
                    label="Shuffle Answers"
                    checked={shuffleAnswers}
                    onChange={(e) => setShuffleAnswers(e.target.checked)}
                    className="mb-2"
                  />

                  {/* Time Limit */}
                  <div className="d-flex align-items-center mb-2">
                    <Form.Check
                      type="checkbox"
                      label="Time Limit"
                      checked={hasTimeLimit}
                      onChange={(e) => setHasTimeLimit(e.target.checked)}
                      className="me-3"
                    />
                    {hasTimeLimit && (
                      <div className="d-flex align-items-center">
                        <Form.Control
                          type="number"
                          value={timeLimit}
                          onChange={(e) => setTimeLimit(Number(e.target.value))}
                          style={{ width: '80px' }}
                          className="me-2"
                        />
                        <span>Minutes</span>
                      </div>
                    )}
                  </div>

                  {/* Multiple Attempts */}
                  <div className="d-flex align-items-center mb-2">
                    <Form.Check
                      type="checkbox"
                      label="Allow Multiple Attempts"
                      checked={multipleAttempts}
                      onChange={(e) => setMultipleAttempts(e.target.checked)}
                      className="me-3"
                    />
                    {multipleAttempts && (
                      <div className="d-flex align-items-center">
                        <Form.Control
                          type="number"
                          value={attemptsAllowed}
                          onChange={(e) =>
                            setAttemptsAllowed(Number(e.target.value))
                          }
                          min={1}
                          style={{ width: '80px' }}
                          className="me-2"
                        />
                        <span>attempts</span>
                      </div>
                    )}
                  </div>

                  {/* Show Correct Answers */}
                  <Form.Group className="mb-2">
                    <Form.Label>Show Correct Answers</Form.Label>
                    <Form.Select
                      value={showCorrectAnswers}
                      onChange={(e) => setShowCorrectAnswers(e.target.value)}
                    >
                      <option value="Never">Never</option>
                      <option value="After Submission">After Submission</option>
                      <option value="After Due Date">After Due Date</option>
                      <option value="Always">Always</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Access Code */}
                  <Form.Group className="mb-2">
                    <Form.Label>Access Code</Form.Label>
                    <Form.Control
                      type="text"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      placeholder="Leave blank for no access code"
                    />
                  </Form.Group>

                  {/* One Question at a Time */}
                  <Form.Check
                    type="checkbox"
                    label="One Question at a Time"
                    checked={oneQuestionAtATime}
                    onChange={(e) => setOneQuestionAtATime(e.target.checked)}
                    className="mb-2"
                  />

                  {/* Webcam Required */}
                  <Form.Check
                    type="checkbox"
                    label="Webcam Required"
                    checked={webcamRequired}
                    onChange={(e) => setWebcamRequired(e.target.checked)}
                    className="mb-2"
                  />

                  {/* Lock Questions After Answering */}
                  <Form.Check
                    type="checkbox"
                    label="Lock Questions After Answering"
                    checked={lockQuestionsAfterAnswering}
                    onChange={(e) =>
                      setLockQuestionsAfterAnswering(e.target.checked)
                    }
                  />
                </Card.Body>
              </Card>

              {/* Dates */}
              <Card className="mb-3">
                <Card.Header>Assign</Card.Header>
                <Card.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Due</strong>
                    </Form.Label>
                    <Form.Control
                      type="datetime-local"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <strong>Available from</strong>
                        </Form.Label>
                        <Form.Control
                          type="datetime-local"
                          value={availableDate}
                          onChange={(e) => setAvailableDate(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <strong>Until</strong>
                        </Form.Label>
                        <Form.Control
                          type="datetime-local"
                          value={availableUntilDate}
                          onChange={(e) =>
                            setAvailableUntilDate(e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Form>
          </Tab.Pane>

          {/* QUESTIONS TAB */}
          <Tab.Pane eventKey="questions">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <strong>Total Points:</strong> {totalPoints}
              </div>
              <Button variant="secondary" onClick={handleAddQuestion}>
                <FaPlus className="me-2" />
                New Question
              </Button>
            </div>

            {questions.length === 0 ? (
              <div className="text-center p-5 text-muted border rounded">
                <p className="fs-5 mb-0">No questions yet.</p>
                <p>Click &quot;New Question&quot; to add a question.</p>
              </div>
            ) : (
              <div>
                {questions.map((question, index) =>
                  editingQuestionId === question._id ? (
                    <QuestionEditor
                      key={question._id}
                      question={question}
                      questionNumber={index + 1}
                      onSave={handleSaveQuestion}
                      onCancel={handleCancelEdit}
                    />
                  ) : (
                    <QuestionPreview
                      key={question._id}
                      question={question}
                      questionNumber={index + 1}
                      onEdit={() => setEditingQuestionId(question._id)}
                      onDelete={() => handleDeleteQuestion(question._id)}
                    />
                  )
                )}
              </div>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {/* Footer buttons */}
      <hr />
      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="outline-danger" onClick={() => handleSave(false)}>
          Save
        </Button>
        <Button variant="danger" onClick={() => handleSave(true)}>
          Save & Publish
        </Button>
      </div>
    </div>
  );
}
