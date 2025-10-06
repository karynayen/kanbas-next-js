'use client';
import Link from 'next/link';
import './../../styles.css';
import { usePathname } from 'next/navigation';

export default function CourseNavigation({ cid }: { cid: string }) {
  const links = [
    'Home',
    'Modules',
    'Piazza',
    'Zoom',
    'Assignments',
    'Quizzes',
    'Grades',
    'People',
  ];
  const pathname = usePathname();
  return (
    <div id="wd-courses-navigation" className="list-group wd fs-5 rounded-0">
      {links.map((link, index) => (
        <Link
          key={link + index}
          href={`/Courses/${cid}/${link}` + (link === 'People' ? '/Table' : '')}
          className={`list-group-item border-0 ${
            pathname.includes(`/Courses/${cid}/${link}`)
              ? 'active'
              : 'text-danger'
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
