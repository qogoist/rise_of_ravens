import React from "react";
import styles from "./NotificationBubble.module.css";

type Props = {
  content: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "before";
  size?: "small" | "medium" | "large";
};

const NotificationBubble: React.FC<Props> = ({ content, position, size = "medium" }) => {
  return (
    <div className={styles.bubble} data-position={position} data-size={size}>
      {content}
    </div>
  );
};

export default NotificationBubble;
