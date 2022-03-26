import React from "react";
import styles from "./Card.module.css";

type Props = {
  className?: string;
};

const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={styles.card + " " + className}>{children}</div>;
};

export default Card;
