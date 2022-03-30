import React from "react";
import styles from "./ProfilePicture.module.css";

type Props = {
  img?: string;
  alt?: string;
  className?: string;
  round?: boolean;
  fill?: string;
};

const ProfilePicture: React.FC<Props> = ({ img, alt, className, round, fill }) => {
  return (
    <div className={`${styles.container} ${className ? className : ""} ${round && styles.round}`}>
      {img ? (
        <img src={img} alt={alt ? alt : "Profile Picture"} />
      ) : (
        <svg className={styles.placeholder} fill={fill ? fill : "#696868"} viewBox="0 0 100 100">
          <rect width="100" height="100" />
        </svg>
      )}
    </div>
  );
};

export default ProfilePicture;
