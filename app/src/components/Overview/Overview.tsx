import React, { useState } from "react";
import { getRelativeTime } from "../../helper/date";
import { placeholderEvents, placeholderFollower } from "../../helper/placeholders";
import Card from "../Card";
import ItemList from "../ItemList";
import TableItem from "../TableItem";
import styles from "./Overview.module.css";

type Props = {
  type: Categories;
};

const Overview: React.FC<Props> = ({ type }) => {
  const [activeEvent, setActiveEvent] = useState<WorldEvent | undefined>(undefined);
  const [activeTask, setActiveTask] = useState<Task | undefined>(undefined);
  const [activeFollower, setActiveFollower] = useState<Follower | undefined>(undefined);

  const handleEvent = (e: React.MouseEvent<HTMLElement>, item: ListItem) => {
    setActiveEvent(item as WorldEvent);
    setActiveTask(undefined);
  };

  const handleTask = (e: React.MouseEvent<HTMLElement>, item: ListItem) => {
    setActiveTask(item as Task);
  };

  const handleFollower = (e: React.MouseEvent<HTMLElement>, item: ListItem) => {
    setActiveFollower(item as Follower);
  };

  if (type.type !== "follower")
    return (
      <div className={styles.container}>
        <Card type="lighter">
          <h3>{`Aktive ${type.display}`}</h3>
          <ItemList
            items={placeholderEvents}
            type="WorldEvent"
            onClick={handleEvent}
            active={activeEvent}
          />
        </Card>
        <Card type="lighter">
          <h3>Info</h3>
          <p>{activeEvent && activeEvent.description}</p>
        </Card>
        <Card type="lighter">
          <h3>Tasks</h3>
          <ItemList
            items={activeEvent?.tasks}
            type="Task"
            onClick={handleTask}
            active={activeTask}
          />
        </Card>
        <Card type="lighter">
          <h3>Follower</h3>
          <ItemList
            items={activeTask?.participants}
            type="Follower"
            onClick={handleFollower}
            active={activeFollower}
          />
        </Card>
      </div>
    );
  else
    return (
      <Card type="lighter" className={styles.follower}>
        <TableItem columns={3} content={["Name", "Aktive Tasks", "Aktivität"]} type="heading" />
        {placeholderFollower.map(follower => (
          <TableItem
            columns={3}
            content={[
              follower.name,
              follower.currentTask?.name,
              getRelativeTime(follower.activeSince),
            ]}
            type="item"
          />
        ))}
      </Card>
    );
};

export default Overview;
