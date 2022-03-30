import React from "react";
import styles from "./Card.module.css";

type Props = {
  className?: string;
  type?: "normal" | "lighter" | "darker";
};

const Card: React.FC<Props> = ({ children, className, type }) => {
  return (
    <div data-type={type} className={`${styles.card} ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Card;
