import axios from 'axios';

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;
export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/enrollments/${courseId}`
  );
  return data;
};

export const unenrollUserFromCourse = async (
  userId: string,
  courseId: string
) => {
  const { data } = await axiosWithCredentials.delete(
    `${USERS_API}/${userId}/enrollments/${courseId}`
  );
  return data;
};

export const findEnrollmentsForUser = async (userId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/enrollments`
  );
  return data;
};
