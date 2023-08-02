import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: null,
  polyline_geometry: null,
  isLoading: false,
  errors: null,
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    // Добавление выбранного маршрута
    addRoute: (state, action) => {
      state.route = action.payload;
    },
    // Запрос на получение координат точек маршрутап
    getWaypointsFetch: (state) => {
      state.isLoading = true;
    },
    // Успешное получение координат точек маршрута
    getWaypointsSuccess: (state, action) => {
      state.polyline_geometry = action.payload;
      state.isLoading = false;
    },
    // Ошибка при получении координат точек маршрута
    getWaypointsFailure: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const {
  addRoute,
  getWaypointsFetch,
  getWaypointsSuccess,
  getWaypointsFailure,
} = routesSlice.actions;

export default routesSlice.reducer;
