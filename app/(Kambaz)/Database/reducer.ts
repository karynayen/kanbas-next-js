/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { enrollments } from './index';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: 'enrollments',
  initialState,
  reducers: {
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments as any;
    },
    enrollInCourse: (state, { payload: { userId, courseId } }) => {
      const newEnrollment = {
        _id: uuidv4(),
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollFromCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) =>
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { enrollInCourse, unenrollFromCourse, setEnrollments } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
