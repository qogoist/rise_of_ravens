import React, { useRef } from "react";
import styles from "./EventItem.module.css";
import Button from "../Button";

type Props = {
  event: WorldEvent;
  active: boolean;
  draggable: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, event: WorldEvent) => void;
};

const EventItem: React.FC<Props> = ({ event, active, draggable, onClick }) => {
  const item = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={item}
      draggable={draggable}
      onDragStart={() => {
        item.current?.classList.add(styles.dragging);
      }}
      onDragEnd={() => {
        item.current?.classList.remove(styles.dragging);
      }}
    >
      <Button
        onClick={e => onClick(e, event)}
        className={`${styles.event} ${active ? styles.active : ""}`}
      >
        {event.name}
      </Button>
    </div>
  );
};

export default EventItem;
