import React from "react";
import styles from "./TaskItem.module.css";

type Props = {
  task: Task;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>, task: Task) => void;
};

const TaskItem: React.FC<Props> = ({ task, active, onClick }) => {
  return (
    <div
      className={`${styles.container} ${active ? styles.active : ""}`}
      onClick={e => onClick(e, task)}
    >
      <h4>{task.name}</h4>
      {active && <p>{task.description}</p>}
    </div>
  );
};

export default TaskItem;
