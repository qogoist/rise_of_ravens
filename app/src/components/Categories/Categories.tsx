import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Categories.module.css";

type Props = {
  categories: Categories[];
};

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div className={styles.container}>
      {categories.map(category => {
        return (
          <NavLink
            key={category.type}
            to={category.type}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            {category.display}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Categories;
