import { configureStore } from '@reduxjs/toolkit';
import taskDetailReducer from './addTaskSlice';
import getAllTaskReducer from "./getAllTaskSlice";
import UpdateTaskReducer from "./updateSlice";

const store = configureStore({
  reducer: {
    taskDetail: taskDetailReducer,
    allTask: getAllTaskReducer,
    Update: UpdateTaskReducer
  },
});

export default store;
