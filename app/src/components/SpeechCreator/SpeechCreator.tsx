import React from "react";
import Button from "../Button";
import Card from "../Card";
import styles from "./SpeechCreator.module.css";

type Props = {};

const SpeechCreator: React.FC<Props> = ({}) => {
  //TODO: Figure out drag and drop for this (Might need "Text" type?)

  const handleDragOver = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Card type="lighter">
        <h3>Text</h3>
        <ul>
          <li draggable={true}>Text 1</li>
          <li draggable={true}>Text 2</li>
          <li draggable={true}>Text 3</li>
          <li draggable={true}>Text 4</li>
          <li draggable={true}>Text 5</li>
        </ul>
      </Card>
      <Card className={styles.speechContainer} type="lighter">
        <h3>Editor</h3>
        <div className={styles.speech} onDragOver={handleDragOver} onDrop={handleDrop}></div>
        <Button>Rede veröffentlichen</Button>
      </Card>
    </div>
  );
};

export default SpeechCreator;
