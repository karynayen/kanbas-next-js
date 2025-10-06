'use client';

import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { BsCalendar } from 'react-icons/bs';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import * as db from '../../../../Database';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a) => a._id === aid);

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment?.title || ''} />
        </Form.Group>

        <Form.Group className="mb-4" controlId="wd-description">
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue={assignment?.description || ''}
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
              defaultValue={assignment?.points || 100}
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
                    defaultValue={assignment?.dueDate || '2024-05-13T23:59'}
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
                        defaultValue={
                          assignment?.availableFromDate || '2024-05-06T00:00'
                        }
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
                        defaultValue={
                          assignment?.availableUntilDate || '2024-05-20T23:59'
                        }
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
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button id="wd-cancel" variant="secondary" className="me-2">
              Cancel
            </Button>
          </Link>
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button id="wd-save" variant="danger">
              Save
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
