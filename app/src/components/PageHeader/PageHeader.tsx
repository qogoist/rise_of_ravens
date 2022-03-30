import React from "react";
import Logo from "../Logo";
import styles from "./PageHeader.module.css";

type Props = {};

const PageHeader: React.FC<Props> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default PageHeader;
