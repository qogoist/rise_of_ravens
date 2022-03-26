import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfilePicture from "../ProfilePicture";

type Props = {};

const ProfileInfo: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <ProfilePicture className={styles.img} />
      <p>Max Mustermann</p>
    </div>
  );
};

export default ProfileInfo;
