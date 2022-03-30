import React from "react";
import styles from "./NotificationBubble.module.css";

type Props = {
  content: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

const NotificationBubble: React.FC<Props> = ({ content, position }) => {
  return (
    <div className={styles.bubble} data-position={position}>
      {content}
    </div>
  );
};

export default NotificationBubble;
