import React, { useState } from "react";
import Card from "../Card";
import ItemList from "../ItemList";
import styles from "./Overview.module.css";

type Props = {
  type: Categories;
};

const placeholderFollower: Follower[] = [
  {
    name: "Member 1",
    rank: "Oberstabsfeldwebel",
    image: "",
  },
  {
    name: "Member 2",
    rank: "Oberstabsfeldwebel",
    image: "",
  },
  {
    name: "Member 3",
    rank: "Oberstabsfeldwebel",
    image: "",
  },
];

const placeholderTasks: Task[] = [
  {
    name: "Task 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eos!",
    participants: [placeholderFollower[0], placeholderFollower[2]],
  },
  {
    name: "Task 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eos!",
    participants: [placeholderFollower[2], placeholderFollower[1]],
  },
  {
    name: "Task 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eos!",
    participants: [placeholderFollower[0], placeholderFollower[1]],
  },
];

const placeholderEvents = [
  {
    name: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius rerum possimus, labore maxime at debitis optio deserunt nemo. Facere.",
    tasks: [placeholderTasks[0], placeholderTasks[2]],
  },
  {
    name: "Event 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius rerum possimus, labore maxime at debitis optio deserunt nemo. Facere.",
    tasks: [placeholderTasks[1], placeholderTasks[2]],
  },
  {
    name: "Event 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius rerum possimus, labore maxime at debitis optio deserunt nemo. Facere.",
    tasks: [placeholderTasks[1], placeholderTasks[0]],
  },
];

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
        <ItemList items={activeEvent?.tasks} type="Task" onClick={handleTask} active={activeTask} />
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
};

export default Overview;
