import React from "react";
import Button from "../Button";
import ProfilePicture from "../ProfilePicture";
import styles from "./ImageGallery.module.css";

type Props = {
  images: string[];
  active: string;
  handleClick: (img: string) => void;
};

const ImageGallery: React.FC<Props> = ({ images, active, handleClick }) => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        return (
          <Button
            className={styles.imageButton + " " + (active === image ? styles.active : "")}
            onClick={() => handleClick(image)}
          >
            <ProfilePicture img={image} key={index} fill="#888888" />
          </Button>
        );
      })}
    </div>
  );
};

export default ImageGallery;
