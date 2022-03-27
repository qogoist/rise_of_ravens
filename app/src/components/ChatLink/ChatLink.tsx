import React from "react";
import styles from "./ChatLink.module.css";
import ProfilePicture from "../ProfilePicture";
import NotificationBubble from "../NotificationBubble";
import Button from "../Button";

type Props = {
  name: string;
  notification?: number;
  onClick: () => void;
};

const ChatLink: React.FC<Props> = ({ name, notification, onClick }) => {
  return (
    <Button onClick={onClick} className={styles.container}>
      <ProfilePicture round={true} fill="#801d1f" />
      <h3>{name}</h3>
      {notification && (
        <NotificationBubble position="top-right" content={notification.toString()} />
      )}
    </Button>
  );
};

export default ChatLink;
