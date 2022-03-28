import React from "react";
import ProfileInfo from "../ProfileInfo";
import ProfilePicture from "../ProfilePicture";
import styles from "./FollowerItem.module.css";

type Props = {
  follower: Follower;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>, follower: Follower) => void;
};

const FollowerItem: React.FC<Props> = ({ follower, active, onClick }) => {
  return (
    <div
      className={`${styles.container} ${active ? styles.active : ""}`}
      onClick={e => onClick(e, follower)}
    >
      <ProfilePicture className={styles.icon} fill="#8e1717" round={true} />
      <h4>{follower.name}</h4>
      {active && <p>{follower.rank}</p>}
    </div>
  );
};

export default FollowerItem;
