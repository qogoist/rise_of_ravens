import React from "react";
import Card from "../Card";
import styles from "./VideoCreator.module.css";

type Props = {};

const VideoCreator: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <Card type="lighter">
        <h3>Bildmaterial</h3>
      </Card>
      <Card type="lighter">
        <h3>Schnitt</h3>
      </Card>
      <Card type="lighter">
        <h3>Sound</h3>
      </Card>
    </div>
  );
};

export default VideoCreator;
