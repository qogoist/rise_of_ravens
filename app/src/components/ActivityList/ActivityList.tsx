import React, { useState } from "react";
import ItemList from "../ItemList";
import styles from "./ActivityList.module.css";

type Props = {
  className: string;
  activities: Task[];
};

const ActivityList: React.FC<Props> = ({ className, activities }) => {
  const [activeTask, setActiveTask] = useState<Task | undefined>(undefined);

  return (
    <div className={`${styles.container} ${className ? className : ""}`}>
      <h3>Aktivitäten</h3>
      <ItemList
        items={activities}
        type="Task"
        onClick={(e: React.MouseEvent<HTMLElement>, item: ListItem) => setActiveTask(item as Task)}
        active={activeTask}
      />
    </div>
  );
};

export default ActivityList;
