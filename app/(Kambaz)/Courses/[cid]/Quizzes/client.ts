/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const QUIZZES_API = `${HTTP_SERVER}/api/quizzes`;
const QUESTIONS_API = `${HTTP_SERVER}/api/questions`;
const ATTEMPTS_API = `${HTTP_SERVER}/api/attempts`;

export const findQuizzesForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/quizzes`
  );
  return data;
};

export const findQuizById = async (quizId: string) => {
  const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}`);
  return data;
};

export const createQuiz = async (courseId: string, quiz: any) => {
  const { data } = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/quizzes`,
    quiz
  );
  return data;
};

export const updateQuiz = async (quiz: any) => {
  const { data } = await axiosWithCredentials.put(
    `${QUIZZES_API}/${quiz._id}`,
    quiz
  );
  return data;
};

export const deleteQuiz = async (quizId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${QUIZZES_API}/${quizId}`
  );
  return data;
};

export const publishQuiz = async (quizId: string, published: boolean) => {
  const { data } = await axiosWithCredentials.put(
    `${QUIZZES_API}/${quizId}/publish`,
    { published }
  );
  return data;
};

// =====================
// QUESTION OPERATIONS
// =====================

export const findQuestionsForQuiz = async (quizId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${QUIZZES_API}/${quizId}/questions`
  );
  return data;
};

export const findQuestionById = async (questionId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${QUESTIONS_API}/${questionId}`
  );
  return data;
};

export const createQuestion = async (quizId: string, question: any) => {
  const { data } = await axiosWithCredentials.post(
    `${QUIZZES_API}/${quizId}/questions`,
    question
  );
  return data;
};

export const updateQuestion = async (question: any) => {
  const { data } = await axiosWithCredentials.put(
    `${QUESTIONS_API}/${question._id}`,
    question
  );
  return data;
};

export const deleteQuestion = async (questionId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${QUESTIONS_API}/${questionId}`
  );
  return data;
};

export const startQuizAttempt = async (quizId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${QUIZZES_API}/${quizId}/attempts`
  );
  return data;
};

export const findAttemptsForQuiz = async (quizId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${QUIZZES_API}/${quizId}/attempts`
  );
  return data;
};

export const findAttemptById = async (attemptId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${ATTEMPTS_API}/${attemptId}`
  );
  return data;
};

export const updateAttempt = async (attempt: any) => {
  const { data } = await axiosWithCredentials.put(
    `${ATTEMPTS_API}/${attempt._id}`,
    attempt
  );
  return data;
};

export const submitAttempt = async (attemptId: string, answers: any[]) => {
  const { data } = await axiosWithCredentials.post(
    `${ATTEMPTS_API}/${attemptId}/submit`,
    { answers }
  );
  return data;
};
