import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  Polyline,
  useMap,
} from "react-leaflet";
import { getWaypointsFetch } from "../../../store/Routes/routesIndex";
import { useDispatch, useSelector } from "react-redux";
import { latLngBounds } from "leaflet";
import { useCallback, useEffect } from "react";

const Map = () => {
  // Подключение необходимых библиотек и модулей
  const polyline = require("polyline");
  const dispatch = useDispatch();
  const route = useSelector((store) => store.routes.route);
  const polyline_geometry = useSelector(
    (store) => store.routes.polyline_geometry
  );

  // Функция для обработки маршрута и получения координат точек
  const handleRoute = useCallback(() => {
    return Object.keys(route)
      .filter((key) => key.includes("point"))
      .map((key) => route[key]);
  }, [route]);

  // Компонент для настройки границ карты
  const MyComponent = () => {
    const bounds = route && latLngBounds(handleRoute());
    const map = useMap();
    bounds && map.fitBounds(bounds);
    return null;
  };

  // Загрузка данных о маршруте и координатах при изменении маршрута
  useEffect(() => {
    if (route) {
      const str = handleRoute()
        .map((item) => Object.values(item).reverse().join(","))
        .join(";");
      dispatch(getWaypointsFetch(str));
    }
  }, [route, dispatch, handleRoute]);

  // Отрисовка карты, маркеров и полилинии
  return (
    <div className={styles.wrapper}>
      <MapContainer
        center={[59.84660399, 30.29496392]}
        zoom={13}
        style={{ height: "800px" }}
      >
        <MyComponent />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Отображение маркеров и полилинии при наличии данных */}
        {polyline_geometry && route && (
          <Polyline positions={polyline.decode(polyline_geometry)}>
            {handleRoute().map((item, index) => (
              <Marker key={index} position={item}>
                <Tooltip className={styles.tooltip}>
                  <p className={styles.subtitle}>{route.route}</p>
                  <p className={styles.subtitle}>{`Пункт ${index + 1}`}</p>
                </Tooltip>
              </Marker>
            ))}
          </Polyline>
        )}
        п
      </MapContainer>
    </div>
  );
};
export default Map;
