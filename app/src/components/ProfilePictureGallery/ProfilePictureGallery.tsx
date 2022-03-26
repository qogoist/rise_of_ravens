import React from "react";
import styles from "./ProfilePictureGallery.module.css";
import Button from "../Button";
import ProfilePicture from "../ProfilePicture";

type Props = {
  className?: string;
};

const ProfilePictureGallery: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className ? className : ""}`}>
      <ProfilePicture />
      <ProfilePicture />
      <ProfilePicture />
      <ProfilePicture />
      <Button className={styles.btn} btnType="link">
        Profilbild hochladen
      </Button>
    </div>
  );
};

export default ProfilePictureGallery;
