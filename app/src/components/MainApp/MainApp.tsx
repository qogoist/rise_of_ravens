import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "../Button";
import Chatrooms from "../Chatrooms";
import Dashboard from "../Dashboard";
import DesignStudio from "../DesignStudio";
import Home from "../Home";
import Navigation from "../Navigation";
import ProfileInfo from "../ProfileInfo";
import Project from "../Project";
import styles from "./MainApp.module.css";

type Props = {};

const MainApp: React.FC<Props> = ({}) => {
  const chat = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <ProfileInfo />
        <Navigation />
        <Button className={styles.invite}>Freunde Einladen</Button>
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
          <Route path="/studio" element={<DesignStudio />} />
        </Routes>
      </div>
      <div className={styles.chat} ref={chat}>
        <Chatrooms />
        <Button
          className={styles.chatBtn}
          btnType="link"
          onClick={() => {
            chat.current?.classList.toggle(styles.open);
          }}
        >
          Chatroom
        </Button>
      </div>
    </div>
  );
};

export default MainApp;
