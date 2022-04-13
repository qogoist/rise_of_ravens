import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfilePicture from "../ProfilePicture";
import { NavLink } from "react-router-dom";

type Props = {};

const ProfileInfo: React.FC<Props> = ({}) => {
  return (
    <NavLink
      to={"/profile/me"}
      className={({ isActive }) =>
        isActive ? styles.active + " " + styles.container : styles.container
      }
    >
      <ProfilePicture className={styles.img} />
      <p>Max Mustermann</p>
    </NavLink>
  );
};

export default ProfileInfo;
