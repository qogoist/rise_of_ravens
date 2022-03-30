import React, { useState } from "react";
import styles from "./Chatrooms.module.css";
import ChatLink from "../ChatLink";
import Button from "../Button";
import ChatInput from "../ChatInput";
import ChatHistory from "../ChatHistory";

type Props = {};

let placeholderChats: ChatData[] = [
  {
    name: "Rise of Ravens",
    members: ["Member 1", "Member 2", "Max"],
    messages: [
      {
        sender: "Member 1",
        content:
          "asdl jiasjdl iasjd laisjd laid jlsaidajsdal siu gflsaudh gasldugih asliuv hcalviuahsclaiuvh ilasv liausv ",
      },
      { sender: "Member 1", content: "WOWLWWOSLAOSD" },
      { sender: "Member 1", content: "WOWLWWOSLAOSD" },
      { sender: "Member 1", content: "WOWLWWOSLAOSD" },
    ],
    unread: 9,
  },
  {
    name: "Admin Channel",
    members: ["Member 1", "Member 2", "Max"],
    messages: [],
    unread: 0,
  },
  {
    name: "Oberstabsgefreite",
    members: ["Member 1", "Member 2", "Max"],
    messages: [],
    unread: 0,
  },
  {
    name: "Memes",
    members: ["Member 1", "Member 2", "Max"],
    messages: [],
    unread: 5,
  },
];

const Chatrooms: React.FC<Props> = ({}) => {
  const [chat, setChat] = useState<ChatData | null>(null);

  //TODO: Fetch relevant Chat Data :smile:

  const handleChatClick = (chat: ChatData) => {
    setChat(chat);
    chat.unread = 0;
  };

  if (!chat)
    return (
      <div className={styles.container}>
        {placeholderChats.map((chat, index) => {
          return (
            <ChatLink
              key={index}
              name={chat.name}
              notification={chat.unread}
              onClick={() => handleChatClick(chat)}
            />
          );
        })}
      </div>
    );
  else
    return (
      <div className={styles.chat}>
        <Button btnType="link" onClick={() => setChat(null)}>
          <h2>{chat.name}</h2>
        </Button>

        <ChatHistory messages={chat.messages} />
        <ChatInput />
      </div>
    );
};

export default Chatrooms;
