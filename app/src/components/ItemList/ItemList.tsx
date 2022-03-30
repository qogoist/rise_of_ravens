import React, { useRef } from "react";
import EventItem from "../EventItem";
import FollowerItem from "../FollowerItem";
import TaskItem from "../TaskItem";
import styles from "./ItemList.module.css";

type Props = {
  items: ListItem[] | undefined;
  type: ListItemTypes;
  active?: ListItem;
  onClick?: (e: React.MouseEvent<HTMLElement>, item: ListItem) => void;
};

const ItemList: React.FC<Props> = ({ items, type, active, onClick }) => {
  const list = useRef<HTMLDivElement>(null);

  const toggleClass = (element: HTMLElement) => {
    for (let child of list.current!.children) {
      if (child.classList.contains(styles.active)) child.classList.toggle(styles.active);
    }

    element.classList.toggle(styles.active);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>, item: ListItem) => {
    toggleClass(e.currentTarget);
    onClick!(e, item);
  };

  return (
    <div ref={list} className={styles.list}>
      {items &&
        items.map(item => {
          const isActive = item === active ? true : false;

          switch (type) {
            case "WorldEvent":
              return (
                <EventItem
                  key={item.name}
                  event={item as WorldEvent}
                  onClick={handleClick}
                  active={isActive}
                />
              );
            case "Task":
              return (
                <TaskItem
                  key={item.name}
                  task={item as Task}
                  onClick={handleClick}
                  active={isActive}
                />
              );
            case "Follower":
              return (
                <FollowerItem
                  key={item.name}
                  follower={item as Follower}
                  onClick={handleClick}
                  active={isActive}
                />
              );
          }
        })}
    </div>
  );
};

export default ItemList;
