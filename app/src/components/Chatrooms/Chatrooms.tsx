import React, { useState } from "react";
import styles from "./Chatrooms.module.css";
import ChatLink from "../ChatLink";
import Button from "../Button";
import ChatInput from "../ChatInput";
import ChatHistory from "../ChatHistory";

type Props = {};

const Chatrooms: React.FC<Props> = ({}) => {
  const [chat, setChat] = useState<ChatData | null>(null);

  //TODO: Fetch relevant Chat Data :smile:

  if (!chat)
    return (
      <div className={styles.container}>
        <ChatLink
          onClick={() =>
            setChat({
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
            })
          }
          name="Rise of Ravens"
          notification={1}
        />
        <ChatLink
          onClick={() =>
            setChat({
              name: "Admin Channel",
              members: ["Member 1", "Member 2", "Max"],
              messages: [],
            })
          }
          name="Admin Channel"
        />
        <ChatLink
          onClick={() =>
            setChat({
              name: "Oberstabsgefreite",
              members: ["Member 1", "Member 2", "Max"],
              messages: [],
            })
          }
          name="Oberstabsgefreite"
        />
        <ChatLink
          onClick={() =>
            setChat({
              name: "Memes",
              members: ["Member 1", "Member 2", "Max"],
              messages: [],
            })
          }
          name="Memes"
          notification={9}
        />
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
