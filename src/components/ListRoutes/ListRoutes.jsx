import styles from "./ListRoutes.module.css";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { addRoute } from "../../store/Routes/routesIndex";
import { useState } from "react";
import { dataSourceRow } from "../../utils/data";

const ListRoutes = () => {
  const dispatch = useDispatch();
  const [activeRowIndex, setActiveRowIndex] = useState();

  const handleRowClick = (record, rowIndex) => {
    dispatch(addRoute(record));
    setActiveRowIndex(rowIndex);
  };

  const columns = [
    {
      title: "Маршрут",
      dataIndex: "route",
      key: "route",
      render: (text) => (
        <a href="#" tabIndex="0">
          {text}
        </a>
      ),
    },
    {
      title: "Пункт 1",
      dataIndex: "point_1",
      key: "point_1",
      render: (array) => (
        <div className={styles.point}>
          {array.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ),
    },
    {
      title: "Пункт 2",
      dataIndex: "point_2",
      key: "point_2",
      render: (array) => (
        <div className={styles.point}>
          {array.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ),
    },
    {
      title: "Пункт 3",
      dataIndex: "point_3",
      key: "point_3",
      render: (array) => (
        <div className={styles.point}>
          {array.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ),
    },
  ];
  return (
    <section className={styles.wrapper}>
      <Table
        bordered
        className={styles.table}
        dataSource={dataSourceRow}
        columns={columns}
        onRow={(record, rowIndex) => ({
          onClick: () => handleRowClick(record, rowIndex),
        })}
        rowClassName={(rowIndex) =>
          rowIndex === activeRowIndex
            ? `${styles.row} ${styles.row_active}`
            : styles.row
        }
      />
    </section>
  );
};

export default ListRoutes;
