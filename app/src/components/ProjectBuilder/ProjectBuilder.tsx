import React, { useState } from "react";
import { placeholderProjectBlueprints, placeholderTasks } from "../../helper/placeholders";
import Button from "../Button";
import Card from "../Card";
import ItemList from "../ItemList";
import TaskItem from "../TaskItem";
import styles from "./ProjectBuilder.module.css";

type Props = {};

const ProjectBuilder: React.FC<Props> = ({}) => {
  const [activeProject, setActiveProject] = useState<ProjectBlueprint | undefined>(undefined);
  const [chosenTasks, setChosenTasks] = useState<Task[]>([]);
  const [possibleTasks, setPossibleTasks] = useState<Task[]>([]);

  const handleProject = (e: React.MouseEvent<HTMLElement>, item: ListItem) => {
    if (item != activeProject) {
      setActiveProject(item as ProjectBlueprint);
      setPossibleTasks((item as ProjectBlueprint).possibleTasks);
    } else setActiveProject(undefined);

    setChosenTasks([]);
  };

  const handleChosenUpdate = (items: ListItem[] | undefined) => {
    if (!activeProject) return;

    setChosenTasks(items as Task[]);
  };

  const handlePossibleUpdate = (items: ListItem[] | undefined) => {
    if (!activeProject) return;

    setPossibleTasks(items as Task[]);
  };

  return (
    <div className={styles.container}>
      <Card type="lighter">
        <h3>Verfügbare Projekte</h3>
        <ItemList
          items={placeholderProjectBlueprints}
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
          items={chosenTasks}
          type="Task"
          acceptdrag={activeProject ? true : false}
          draggable={true}
          updateItems={handleChosenUpdate}
        />
        <div className={styles.bottom}>
          <h3>Abschluss Task</h3>
          <TaskItem
            task={placeholderTasks[0]}
            active={false}
            draggable={false}
            onClick={() => {}}
          />
        </div>
      </Card>
      <Card type="lighter">
        <h3>Verfügbare Tasks</h3>
        <ItemList
          items={possibleTasks}
          type="Task"
          draggable={true}
          acceptdrag={true}
          updateItems={handlePossibleUpdate}
        />
      </Card>
      <Button onClick={() => console.log(activeProject)}>Projekt Starten</Button>
    </div>
  );
};

export default ProjectBuilder;
