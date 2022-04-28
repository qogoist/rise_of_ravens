import React, { useState } from "react";
import styles from "./ImageCreator.module.css";
import Card from "../Card";
import ImageGallery from "../ImageGallery";
import TextPicker from "../TextPicker";
import Button from "../Button";

type Props = {};

const ImageCreator: React.FC<Props> = ({}) => {
  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);
  const [activeText, setActiveText] = useState<string | undefined>(undefined);

  return (
    <div className={styles.container}>
      <Card type="lighter">
        <h3>Bildmaterial</h3>
        <ImageGallery
          active={activeImage!}
          handleClick={setActiveImage}
          images={[
            "https://images.unsplash.com/photo-1651059452723-8b51fb72333e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1339&q=80",
            "https://images.unsplash.com/photo-1651060180436-46945d9fce2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80",
            "https://images.unsplash.com/photo-1651003724778-71a70ad3f826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80",
            "https://images.unsplash.com/photo-1650969206434-622016de7428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            "https://images.unsplash.com/photo-1651062494028-20c383dfc97b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          ]}
        />
      </Card>
      <Card className={styles.scratchContainer} type="lighter">
        <h3>Scratch</h3>
        <div className={styles.scratch}>
          {activeImage ? <img src={activeImage}></img> : <></>}
          {activeText ? <span>{activeText}</span> : <></>}
        </div>
        <Button>Bild veröffentlichen</Button>
      </Card>
      <Card type="lighter">
        <h3>Text</h3>
        <TextPicker
          active={activeText!}
          handleClick={setActiveText}
          texts={[
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nisi.",
            "Some other Text 🔥",
          ]}
        />
      </Card>
    </div>
  );
};

export default ImageCreator;
