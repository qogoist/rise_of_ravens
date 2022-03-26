import React from "react";
import styles from "./ProfilePicture.module.css";

type Props = {
  img?: string;
  alt?: string;
  className?: string;
};

const ProfilePicture: React.FC<Props> = ({ img, alt, className }) => {
  return (
    <div className={`${styles.container} ${className ? className : ""}`}>
      {img ? (
        <img src={img} alt={alt ? alt : "Profile Picture"} />
      ) : (
        <svg className={styles.placeholder} viewBox="0 0 100 100">
          <rect width="100" height="100" />
        </svg>
      )}
    </div>
  );
};

export default ProfilePicture;
