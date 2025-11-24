/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Table } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import PeopleDetails from './Details';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as client from '../../client';

export default function PeopleTable({
  users = [],
  fetchUsers,
}: {
  users?: any[];
  fetchUsers: () => void;
}) {
  const [currentUsers, setCurrentUsers] = useState<any[]>(users);
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  const { cid } = useParams();

  const fetchUsersForCourse = async () => {
    const enrolledUsers = await client.findUsersForCourse(cid as string);
    setCurrentUsers(enrolledUsers);
  };

  useEffect(() => {
    if (users && users.length > 0) {
      setCurrentUsers(users);
    }
  }, [users]);

  useEffect(() => {
    if (!fetchUsers) {
      fetchUsersForCourse();
    }
  }, [cid]);

  return (
    <div id="wd-people-table">
      {showDetails && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            fetchUsers(); // TODO does this need to be different
          }}
        />
      )}

      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span
                  className="text-decoration-none"
                  onClick={() => {
                    setShowDetails(true);
                    setShowUserId(user._id);
                  }}
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{' '}
                  <span className="wd-last-name">{user.lastName}</span>
                </span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
