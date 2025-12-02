'use client';
import { Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

interface QuizContextMenuProps {
  quiz: {
    _id: string;
    title: string;
    published: boolean;
  };
  cid: string;
  onDelete: (quizId: string, quizTitle: string) => void;
  onPublishToggle: (quiz: { _id: string; published: boolean }) => void;
}

export default function QuizContextMenu({
  quiz,
  cid,
  onDelete,
  onPublishToggle,
}: QuizContextMenuProps) {
  const router = useRouter();

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="link"
        className="text-secondary p-0 border-0"
        id={`quiz-menu-${quiz._id}`}
        style={{ boxShadow: 'none' }}
      >
        <BsThreeDotsVertical />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() =>
            router.push(`/Courses/${cid}/Quizzes/${quiz._id}/Editor`)
          }
        >
          Edit
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onPublishToggle(quiz)}>
          {quiz.published ? 'Unpublish' : 'Publish'}
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => onDelete(quiz._id, quiz.title)}
          className="text-danger"
        >
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
