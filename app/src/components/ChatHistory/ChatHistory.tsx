import React from "react";
import styles from "./ChatHistory.module.css";
import ChatMessage from "../ChatMessage";

type Props = {
  messages: ChatMessage[];
};

const ChatHistory: React.FC<Props> = ({ messages }) => {
  return (
    <div className={styles.container}>
      {messages.map((message, index) => {
        return (
          <ChatMessage
            key={`message_${index}`}
            sender={message.sender}
            message={message.content}
            self={index === 2 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default ChatHistory;
