import React from "react";
import styles from "./Logo.module.css";

type Props = {
  size?: "small" | "medium" | "large";
};

const Logo: React.FC<Props> = ({ size }) => {
  return (
    <h1 className={styles.logo} data-size={size}>
      rise of ravens
    </h1>
  );
};
export default Logo;
