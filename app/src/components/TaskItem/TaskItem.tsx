import React, { useRef, useState } from "react";
import styles from "./TaskItem.module.css";

type Props = {
  task: Task;
  active: boolean;
  draggable: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>, task: Task) => void;
  deleteTask?: (task: Task) => void;
  dragEnd?: (task: Task) => void;
};

const TaskItem: React.FC<Props> = ({ task, active, draggable, onClick, deleteTask, dragEnd }) => {
  const [isActive, setIsActive] = useState<boolean>(active);
  const item = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsActive(!isActive);

    onClick(e, task);
  };

  return (
    <div
      ref={item}
      className={`${styles.container} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
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

        dragEnd?.(task);
      }}
    >
      <h4>{task.name}</h4>
      {isActive && <p>{task.description}</p>}
    </div>
  );
};

export default TaskItem;
