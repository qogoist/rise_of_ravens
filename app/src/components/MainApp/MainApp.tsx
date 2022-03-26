import React from "react";
import { Routes, Route } from "react-router-dom";
import Button from "../Button";
import Dashboard from "../Dashboard";
import DesignStudio from "../DesignStudio";
import Home from "../Home";
import Navigation from "../Navigation";
import ProfileInfo from "../ProfileInfo";
import Project from "../Project";
import styles from "./MainApp.module.css";

type Props = {};

const MainApp: React.FC<Props> = ({}) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <ProfileInfo />
        <Navigation />
        <Button className={styles.invite}>Freunde Einladen</Button>
      </div>
      <div className={styles.content}>
        <Button className={styles.chatBtn} btnType="link">
          Chatroom
        </Button>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
          <Route path="/studio" element={<DesignStudio />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainApp;
