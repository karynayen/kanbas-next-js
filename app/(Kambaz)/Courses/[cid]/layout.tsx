/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { ReactNode, useState, useEffect } from 'react';
import CourseNavigation from './Navigation';
import { FaAlignJustify } from 'react-icons/fa';
import Breadcrumb from './Breadcrumb';

import { useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const course = courses.find((course: any) => course._id === cid);
  const [showNavigation, setShowNavigation] = useState(false);

  const isEnrolled =
    currentUser?.role === 'FACULTY' ||
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === cid
    );

  useEffect(() => {
    // Set initial state based on screen size (show on medium+ screens by default)
    if (window.innerWidth >= 768) {
      setShowNavigation(true);
    }
  }, []);

  useEffect(() => {
    if (currentUser && !isEnrolled) {
      router.push('/Dashboard');
    }
  }, [currentUser, isEnrolled, router]);

  if (currentUser && !isEnrolled) {
    return null;
  }
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
