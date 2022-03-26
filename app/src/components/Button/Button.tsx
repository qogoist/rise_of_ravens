import React from "react";
import styles from "./Button.module.css";

type Props = {
  text?: string;
  className?: string;
  btnType?: "button" | "link";
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  text,
  className,
  btnType = "button",
  type,
  onClick,
  children,
}) => {
  return (
    <button
      className={`${btnType === "link" ? styles.link : styles.btn} ${className ? className : ""}`}
      onClick={onClick}
      type={type}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
