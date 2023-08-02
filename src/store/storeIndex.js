import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import routesReducer from "./Routes/routesIndex";
import waypointsSaga from "../store/Sagas/Sagas";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    routes: routesReducer,
  },
  middleware: [saga],
});

saga.run(waypointsSaga);
