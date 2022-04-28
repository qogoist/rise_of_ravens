import React from "react";
import styles from "./DesignStudio.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "../Categories";
import ImageCreator from "../ImageCreator";
import PageHeader from "../PageHeader";
import SpeechCreator from "../SpeechCreator";
import VideoCreator from "../VideoCreator";

type Props = {};

const DesignStudio: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <PageHeader>Design Studio</PageHeader>
      <Categories
        categories={[
          { type: "image", display: "Grafik" },
          { type: "video", display: "Video" },
          { type: "speech", display: "Rede" },
        ]}
      />
      <Routes>
        <Route path="" element={<Navigate to="image" />} />
        <Route path="image" element={<ImageCreator />} />
        <Route path="video" element={<VideoCreator />} />
        <Route path="speech" element={<SpeechCreator />} />
      </Routes>
    </div>
  );
};

export default DesignStudio;
