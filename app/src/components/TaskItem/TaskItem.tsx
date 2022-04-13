import React, { useRef } from "react";
import styles from "./TaskItem.module.css";

type Props = {
  task: Task;
  active: boolean;
  draggable: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>, task: Task) => void;
  deleteTask?: (task: Task) => void;
};

const TaskItem: React.FC<Props> = ({ task, active, draggable, onClick, deleteTask }) => {
  const item = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={item}
      className={`${styles.container} ${active ? styles.active : ""}`}
      onClick={e => onClick(e, task)}
      draggable={draggable}
      onDragStart={(e: React.DragEvent) => {
        item.current?.classList.add(styles.dragging);
        item.current!.id = "dragging";

        e.dataTransfer.setData("text", JSON.stringify(task));
        deleteTask?.(task);
      }}
      onDragEnd={() => {
        item.current?.classList.remove(styles.dragging);
        item.current!.id = "";

        item.current!.style.pointerEvents = "all";
      }}
    >
      <h4>{task.name}</h4>
      {active && <p>{task.description}</p>}
    </div>
  );
};

export default TaskItem;
