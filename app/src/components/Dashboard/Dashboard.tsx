import React from "react";
import styles from "./Dashboard.module.css";
import PageHeader from "../PageHeader";
import Categories from "../Categories";
import { Route, Routes } from "react-router-dom";
import Overview from "../Overview";

type Props = {};

const Dashboard: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <PageHeader>Dashboard</PageHeader>
      <Categories
        categories={[
          { type: "events", display: "Events" },
          { type: "projects", display: "Projekte" },
        ]}
      />
      <Routes>
        <Route path="" element={<Overview type={{ type: "events", display: "Events" }} />} />
        <Route path="events" element={<Overview type={{ type: "events", display: "Events" }} />} />
        <Route
          path="projects"
          element={<Overview type={{ type: "projects", display: "Projekte" }} />}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
