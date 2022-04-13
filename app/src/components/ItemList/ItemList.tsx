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
  const [listItems, setListItems] = useState(items);
  const [del, setDel] = useState<ListItem | null>(null);
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateItems?.(listItems);
  }, [listItems]);

  const handleClick = (e: React.MouseEvent<HTMLElement>, item: ListItem) => {
    onClick!(e, item);
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

    setListItems([...listItems!, item]);
  };

  const handleDeleteItem = (item: ListItem) => {
    setDel(item);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    if (!acceptdrag) return;

    e.stopPropagation();
    e.preventDefault();

    if (del) {
      const newList = listItems!.filter(litem => del.name !== litem.name);
      setListItems(newList);
    }
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
      {listItems &&
        listItems.map(item => {
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
