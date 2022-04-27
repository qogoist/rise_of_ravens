import React, { useEffect, useRef, useState } from "react";
import EventItem from "../EventItem";
import FollowerItem from "../FollowerItem";
import TaskItem from "../TaskItem";
import styles from "./ItemList.module.css";

type Props = {
  items: ListItem[] | undefined;
  type: ListItemTypes;
  active?: ListItem;
  draggable?: boolean;
  acceptdrag?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>, item: ListItem) => void;
  updateItems?: (items: ListItem[] | undefined) => void;
};

const ItemList: React.FC<Props> = ({
  items,
  type,
  active,
  draggable = false,
  acceptdrag = false,
  onClick,
  updateItems,
}) => {
  const [del, setDel] = useState<ListItem | null>(null);
  const list = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>, item: ListItem) => {
    onClick?.(e, item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (!acceptdrag) return;

    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent) => {
    if (!acceptdrag) return;

    e.stopPropagation();
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    if (!acceptdrag) return;

    e.stopPropagation();
    e.preventDefault();

    const item = JSON.parse(e.dataTransfer.getData("text"));
    const newList = [...items!, item];

    updateItems?.(newList);
  };

  const handleDeleteItem = (item: ListItem) => {
    setDel(item);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    if (!acceptdrag) return;

    e.stopPropagation();
    e.preventDefault();
  };

  const removeItem = (item: ListItem) => {
    const newList = [...items!];
    const index = newList.findIndex(x => x.name === item.name);

    if (index > -1) newList.splice(index, 1);

    updateItems?.(newList);
  };

  return (
    <div
      ref={list}
      className={styles.list}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
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
                  draggable={draggable}
                />
              );
            case "Task":
              return (
                <TaskItem
                  key={item.name}
                  task={item as Task}
                  onClick={handleClick}
                  deleteTask={handleDeleteItem}
                  dragEnd={removeItem}
                  active={isActive}
                  draggable={draggable}
                />
              );
            case "Follower":
              return (
                <FollowerItem
                  key={item.name}
                  follower={item as Follower}
                  onClick={handleClick}
                  active={isActive}
                  draggable={draggable}
                />
              );
          }
        })}
    </div>
  );
};

export default ItemList;
