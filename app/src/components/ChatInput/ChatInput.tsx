import React from "react";
import styles from "./ChatInput.module.css";
import Button from "../Button";
import FormInput from "../FormInput";

type Props = {};

const ChatInput: React.FC<Props> = ({}) => {
  //TODO: Probably replace with <textarea></textarea> for multiline strings
  return (
    <form className={styles.container}>
      <FormInput name="message" placeholder="Schreib' etwas ..." type="text" />
      <Button className={styles.send} type="submit">
        Senden
      </Button>
    </form>
  );
};

export default ChatInput;
