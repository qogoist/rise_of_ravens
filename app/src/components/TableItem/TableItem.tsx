import React from "react";
import { Link } from "react-router-dom";
import styles from "./TableItem.module.css";

type Props = {
  content: (string | undefined)[];
  link?: string;
  columns: number;
  type: "heading" | "item";
};

const TableItem: React.FC<Props> = ({ content, link, columns, type }) => {
  return (
    <div style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }} className={styles.container}>
      {content.map((item, index) => {
        if (type === "item" && index === 0)
          return (
            <Link key={index} to={`/profile/${link}`} className={styles[type]}>
              {item ? item : "None"}
            </Link>
          );
        else
          return (
            <div key={index} className={styles[type]}>
              {item ? item : "None"}
            </div>
          );
      })}
    </div>
  );
};

export default TableItem;
