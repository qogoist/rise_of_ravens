import React from "react";
import { resolvePath } from "react-router-dom";
import styles from "./TableItem.module.css";

type Props = {
  content: (string | undefined)[];
  columns: number;
  type: "heading" | "item";
};

const TableItem: React.FC<Props> = ({ content, columns, type }) => {
  return (
    <div style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }} className={styles.container}>
      {content.map(item => (
        <p className={styles[type]}>{item ? item : "None"}</p>
      ))}
    </div>
  );
};

export default TableItem;
