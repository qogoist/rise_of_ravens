import React from "react";
import styles from "./Dashboard.module.css";
import PageHeader from "../PageHeader";

type Props = {};

const Dashboard: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <PageHeader>Dashboard</PageHeader>
    </div>
  );
};

export default Dashboard;
