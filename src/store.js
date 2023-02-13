import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import taskksReducer from "./features/tasks/tasksSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: taskksReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;