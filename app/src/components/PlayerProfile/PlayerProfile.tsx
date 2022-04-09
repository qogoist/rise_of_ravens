import React from "react";
import styles from "./PlayerProfile.module.css";
import Card from "../Card";
import PageHeader from "../PageHeader";
import ProfilePicture from "../ProfilePicture";
import Button from "../Button";
import ActivityList from "../ActivityList";
import { placeholderData } from "../../helper/placeholders";

type Props = {
  self?: boolean;
};

const PlayerProfile: React.FC<Props> = ({ self = false }) => {
  return (
    <div className={styles.container}>
      <PageHeader>Profil</PageHeader>
      <div className={styles.ranks}>
        <span className={styles.upper}>{placeholderData.rank}</span> | {placeholderData.title}
      </div>
      <Card type="lighter" className={styles.main}>
        <h3>Info</h3>
        <ProfilePicture className={styles.img} fill="#888888" />
        <div className={styles.info}>
          <p>Benutzername: {placeholderData.name}</p>
          <p>Titel: {placeholderData.title}</p>
          <p>Rang: {placeholderData.rank}</p>
          <p>Einfluss: {placeholderData.influence}</p>
        </div>
        {self ? (
          <div className={styles.buttons}>
            <Button>Passwort ändern</Button>
            <Button>Email Adresse ändern</Button>
          </div>
        ) : (
          <ActivityList className={styles.activities} activities={placeholderData.tasks} />
        )}
      </Card>
      <Card type="lighter" className={styles.strengths}>
        <h3>Stärkenbereiche</h3>
        
      </Card>
    </div>
  );
};

export default PlayerProfile;
