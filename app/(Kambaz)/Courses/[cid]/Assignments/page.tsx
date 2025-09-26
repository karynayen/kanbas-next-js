import Link from 'next/link';
import { ListGroup, ListGroupItem, Button, InputGroup, Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BsGripVertical, BsThreeDotsVertical, BsCaretDownFill } from 'react-icons/bs';
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <div className="mb-3 clearfix">
          <div className="w-50 float-start">
            <InputGroup>
              <span className="input-group-text bg-white border-end-0">
                <FaSearch className="text-secondary" />
              </span>
              <Form.Control
                id="wd-search-assignment"
                placeholder="Search..."
                className="border-start-0"
              />
            </InputGroup>
          </div>
          <Button id="wd-add-assignment" variant="danger" size="lg" className="float-end ms-2 text-nowrap border wd-header-action">
            <FaPlus className="me-2 position-relative" style={{ bottom: '1px' }} />
            Assignment
          </Button>
          <Button id="wd-add-assignment-group" variant="secondary" size="lg" className="float-end text-nowrap border wd-header-action">
            <FaPlus className="me-2 position-relative" style={{ bottom: '1px' }} />
            Group
          </Button>
        </div>

        <div className="d-flex align-items-center justify-content-between mt-4 mb-0 p-3 ps-2 wd-assignments-header">
          <h3 id="wd-assignments-title" className="m-0 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5 text-secondary" />
            <BsCaretDownFill className="me-2 text-secondary" size={12} />
            ASSIGNMENTS
          </h3>
          <div className="d-flex align-items-center">
            <Button variant="light" size="sm" className="rounded-pill me-2 text-secondary wd-header-pill">
              40% of Total
            </Button>
            <button className="btn p-1 bg-transparent border-0 text-secondary me-1">
              <FaPlus />
            </button>
            <button className="btn p-1 bg-transparent border-0 text-secondary">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>

        <ListGroup id="wd-assignment-list" className="rounded-0">
          <ListGroupItem className="wd-assignment-list-item wd-assignment p-3 ps-2 d-flex align-items-center border-gray">
            <BsGripVertical className="me-0 fs-3 text-secondary" />
            <IoNewspaperOutline className="text-success me-3 fs-5" />
            <div className="flex-fill">
              <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-decoration-none text-dark">
                A1 - ENV + HTML
              </Link>
              <div className="text-muted small mt-1">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |
                <br />
                <strong>Due</strong> May 13 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="ms-2 d-flex align-items-center">
              <GreenCheckmark />
              <BsThreeDotsVertical className="ms-2 text-secondary" />
            </div>
          </ListGroupItem>

          <ListGroupItem className="wd-assignment-list-item wd-assignment p-3 ps-2 d-flex align-items-center border-gray">
            <BsGripVertical className="me-0 fs-3 text-secondary" />
            <IoNewspaperOutline className="text-success me-3 fs-5" />
            <div className="flex-fill">
              <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-decoration-none text-dark">
                A2 - CSS + BOOTSTRAP
              </Link>
              <div className="text-muted small mt-1">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am |
                <br />
                <strong>Due</strong> May 20 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="ms-2 d-flex align-items-center">
              <GreenCheckmark />
              <BsThreeDotsVertical className="ms-2 text-secondary" />
            </div>
          </ListGroupItem>

          <ListGroupItem className="wd-assignment-list-item wd-assignment p-3 ps-2 d-flex align-items-center border-gray">
            <BsGripVertical className="me-0 fs-3 text-secondary" />
            <IoNewspaperOutline className="text-success me-3 fs-5" />
            <div className="flex-fill">
              <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-decoration-none text-dark">
                A3 - JAVASCRIPT + REACT
              </Link>
              <div className="text-muted small mt-1">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am |
                <br />
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="ms-2 d-flex align-items-center">
              <GreenCheckmark />
              <BsThreeDotsVertical className="ms-2 text-secondary" />
            </div>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
}
