import React from "react";
import styles from "./TextPicker.module.css";

type Props = {
  texts: string[];
  active: string;
  handleClick: (text: string) => void;
};

const TextPicker: React.FC<Props> = ({ texts, active, handleClick }) => {
  return (
    <ul className={styles.container}>
      {texts.map((text, index) => {
        return (
          <li
            key={index}
            className={styles.textBlock + " " + (active === text ? styles.active : "")}
            onClick={e => handleClick(text)}
          >
            {text}
          </li>
        );
      })}
    </ul>
  );
};

export default TextPicker;
