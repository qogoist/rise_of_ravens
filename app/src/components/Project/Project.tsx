import React from "react";
import styles from "./Project.module.css";
import ProjectBuilder from "../ProjectBuilder";
import PageHeader from "../PageHeader";

type Props = {};

const Project: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <PageHeader>Projekt Erstellen</PageHeader>
      <ProjectBuilder />
    </div>
  );
};

export default Project;
