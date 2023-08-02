import { call, put, takeEvery } from "redux-saga/effects";
import {
  getWaypointsSuccess,
  getWaypointsFailure,
} from "../Routes/routesIndex";
import { BASE_URL } from "../../utils/config";

// Генератор для обработки запроса на получение координат точек маршрута
function* workGetWaypointsFetch(action) {
  try {
    const routes = yield call(() =>
      fetch(`${BASE_URL}${action.payload}?geometries=polyline`)
    );
    const response = yield routes.json();
    if (response.code === "Ok") {
      // Успешное получение координат точек маршрута
      yield put(getWaypointsSuccess(response.routes[0].geometry));
    } else {
      // Обработка ошибки при получении координат точек маршрута
      throw response;
    }
  } catch (err) {
    yield put(getWaypointsFailure(err));
  }
}
// Генератор для саги, слушающей запросы на получение координат точек маршрутап
function* waypointsSaga() {
  yield takeEvery("routes/getWaypointsFetch", workGetWaypointsFetch);
}

export default waypointsSaga;
