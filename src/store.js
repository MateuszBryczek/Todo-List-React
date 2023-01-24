import { configureStore } from "@reduxjs/toolkit";
import taskksReducer from "./features/tasks/tasksSlice";

export default configureStore({
    reducer: {
        tasks: taskksReducer,
    },
});