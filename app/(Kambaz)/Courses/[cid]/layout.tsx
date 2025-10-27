/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { ReactNode, useState, useEffect } from 'react';
import CourseNavigation from './Navigation';
import { FaAlignJustify } from 'react-icons/fa';
import { courses } from '../../Database';
import Breadcrumb from './Breadcrumb';

import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    // Set initial state based on screen size (show on medium+ screens by default)
    if (window.innerWidth >= 768) {
      setShowNavigation(true);
    }
  }, []);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          style={{ cursor: 'pointer' }}
          onClick={() => setShowNavigation(!showNavigation)}
        />
        <Breadcrumb course={course ? { name: course?.name } : undefined} />
      </h2>{' '}
      <hr />
      <div className="d-flex">
        {showNavigation && (
          <div>
            <CourseNavigation cid={cid as string} />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
