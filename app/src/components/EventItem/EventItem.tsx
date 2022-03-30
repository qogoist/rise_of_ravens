import React from "react";
import styles from "./EventItem.module.css";
import Button from "../Button";

type Props = {
  event: WorldEvent;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, event: WorldEvent) => void;
};

const EventItem: React.FC<Props> = ({ event, active, onClick }) => {
  return (
    <Button
      onClick={e => onClick(e, event)}
      className={`${styles.event} ${active ? styles.active : ""}`}
    >
      {event.name}
    </Button>
  );
};

export default EventItem;
