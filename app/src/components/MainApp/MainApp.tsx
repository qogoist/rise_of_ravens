import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "../Button";
import Chatrooms from "../Chatrooms";
import Dashboard from "../Dashboard";
import DesignStudio from "../DesignStudio";
import FormInput from "../FormInput";
import Home from "../Home";
import InviteModal from "../InviteModal";
import Modal from "../Modal";
import Navigation from "../Navigation";
import NotificationBubble from "../NotificationBubble";
import PlayerProfile from "../PlayerProfile";
import ProfileInfo from "../ProfileInfo";
import Project from "../Project";
import styles from "./MainApp.module.css";

type Props = {};

const MainApp: React.FC<Props> = ({}) => {
  const [notifications, setNotifications] = useState<boolean>(true);
  const [invite, setInvite] = useState<boolean>(false);
  const chat = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <ProfileInfo />
        <Navigation />
        <Button className={styles.invite} onClick={() => setInvite(true)}>
          Freunde Einladen
        </Button>
      </div>
      <div className={styles.content}>
        <InviteModal show={invite} onClose={() => setInvite(false)} />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
          <Route path="/studio" element={<DesignStudio />} />
          <Route path="/profile">
            <Route path=":playerID" element={<PlayerProfile />} />
            <Route path="me" element={<PlayerProfile self={true} />} />
          </Route>
        </Routes>
      </div>
      <div className={styles.chat} ref={chat}>
        <Chatrooms />
        <Button
          className={styles.chatBtn}
          btnType="link"
          onClick={() => {
            chat.current?.classList.toggle(styles.open);
            setNotifications(false);
          }}
        >
          Chatroom
          {notifications && <NotificationBubble content="!" position="before" size="small" />}
        </Button>
      </div>
    </div>
  );
};

export default MainApp;
