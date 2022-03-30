import React from "react";
import styles from "./ChatMessage.module.css";
import ProfilePicture from "../ProfilePicture";

type Props = {
  sender: string;
  message: string;
  self?: boolean;
};

const ChatMessage: React.FC<Props> = ({ sender, message, self = false }) => {
  return (
    <div className={styles.container} data-self={self}>
      <ProfilePicture className={styles.icon} round={true} fill="#801d1f" />
      <div className={styles.message}>
        <h5>{sender}</h5>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
