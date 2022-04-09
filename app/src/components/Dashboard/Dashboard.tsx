import React from "react";
import styles from "./Dashboard.module.css";
import PageHeader from "../PageHeader";
import Categories from "../Categories";
import { Navigate, Route, Routes } from "react-router-dom";
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
          { type: "follower", display: "Follower" },
        ]}
      />
      <Routes>
        <Route path="" element={<Navigate to="events" />} />
        <Route path="events" element={<Overview type={{ type: "events", display: "Events" }} />} />
        <Route
          path="projects"
          element={<Overview type={{ type: "projects", display: "Projekte" }} />}
        />
        <Route
          path="follower"
          element={<Overview type={{ type: "follower", display: "Follower" }} />}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
