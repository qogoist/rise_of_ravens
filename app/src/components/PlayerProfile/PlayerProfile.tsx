import React, { useEffect, useState } from "react";
import styles from "./PlayerProfile.module.css";
import Card from "../Card";
import PageHeader from "../PageHeader";
import ProfilePicture from "../ProfilePicture";
import Button from "../Button";
import ActivityList from "../ActivityList";
import { placeholderData } from "../../helper/placeholders";
import { useParams } from "react-router-dom";
import { getPlayerData } from "../../api/Players";

type Props = {
  self?: boolean;
};

const PlayerProfile: React.FC<Props> = ({ self = false }) => {
  const { playerID } = useParams();
  const [player, setPlayer] = useState<Follower>();

  useEffect(() => {
    console.log(playerID);

    if (playerID) setPlayer(getPlayerData(playerID));
    else setPlayer(placeholderData);
  }, [playerID]);

  if (player)
    return (
      <div className={styles.container}>
        <PageHeader>Profil</PageHeader>
        <div className={styles.ranks}>
          <span className={styles.upper}>{player.rank}</span> | {player.title}
        </div>
        <Card type="lighter" className={styles.main}>
          <h3>Info</h3>
          <ProfilePicture className={styles.img} fill="#888888" />
          <div className={styles.info}>
            <p>Benutzername: {player.name}</p>
            <p>Titel: {player.title}</p>
            <p>Rang: {player.rank}</p>
            <p>Einfluss: {player.influence}</p>
          </div>
          {self ? (
            <div className={styles.buttons}>
              <Button>Passwort ändern</Button>
              <Button>Email Adresse ändern</Button>
            </div>
          ) : (
            <ActivityList className={styles.activities} activities={player.tasks} />
          )}
        </Card>
        <Card type="lighter" className={styles.strengths}>
          <h3>Stärkenbereiche</h3>
          {player.strengths.map((strength, index) => (
            <div key={index} className={styles.strength}>
              <h4>{strength.type}</h4>
              {strength.speciality && <span>{strength.speciality}</span>}
            </div>
          ))}
        </Card>
      </div>
    );
  else return <></>;
};

export default PlayerProfile;
