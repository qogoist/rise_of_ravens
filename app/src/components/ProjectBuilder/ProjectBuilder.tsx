import React, { useState } from "react";
import { placeholderEvents, placeholderTasks } from "../../helper/placeholders";
import Button from "../Button";
import Card from "../Card";
import ItemList from "../ItemList";
import TaskItem from "../TaskItem";
import styles from "./ProjectBuilder.module.css";

type Props = {};

const ProjectBuilder: React.FC<Props> = ({}) => {
  const [activeProject, setActiveProject] = useState<WorldEvent | undefined>(undefined);

  const handleProject = (e: React.MouseEvent<HTMLElement>, item: ListItem) => {
    if (item != activeProject) setActiveProject(item as WorldEvent);
    else setActiveProject(undefined);
  };

  const handleUpdate = (items: ListItem[] | undefined) => {
    if (!activeProject) return;

    const newProject = activeProject;
    newProject.tasks = items as Task[];

    setActiveProject(newProject);
  };

  return (
    <div className={styles.container}>
      <Card type="lighter">
        <h3>Verfügbare Projekte</h3>
        <ItemList
          items={placeholderEvents}
          type="WorldEvent"
          onClick={handleProject}
          active={activeProject}
        />
      </Card>
      <Card type="lighter">
        <h3>Info</h3>
        <p>{activeProject && activeProject.description}</p>
      </Card>
      <Card className={styles.flexlist} type="lighter">
        <h3>Gewählte Tasks</h3>
        <ItemList
          items={[]}
          type="Task"
          acceptdrag={true}
          draggable={true}
          updateItems={handleUpdate}
        />
        <div className={styles.bottom}>
          <h3>Abschluss Task</h3>
          <TaskItem
            task={placeholderTasks[0]}
            active={false}
            draggable={false}
            onClick={() => console.log("Jo")}
          ></TaskItem>
        </div>
      </Card>
      <Card type="lighter">
        <h3>Verfügbare Tasks</h3>
        <ItemList items={placeholderTasks} type="Task" draggable={true} acceptdrag={true} />
      </Card>
      <Button onClick={() => console.log(activeProject)}>Projekt Starten</Button>
    </div>
  );
};

export default ProjectBuilder;
