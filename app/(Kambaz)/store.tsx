import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './Courses/reducer';
import modulesReducer from './Courses/[cid]/Modules/reducer';
import assignmentsReducer from './Courses/[cid]/Assignments/reducer';
import quizzesReducer from './Courses/[cid]/Quizzes/reducer';
import accountReducer from './Account/reducer';
import enrollmentsReducer from './Database/reducer';
const store = configureStore({
  reducer: {
    coursesReducer,
    modulesReducer,
    assignmentsReducer,
    quizzesReducer,
    accountReducer,
    enrollmentsReducer,
  },
});
export default store;
