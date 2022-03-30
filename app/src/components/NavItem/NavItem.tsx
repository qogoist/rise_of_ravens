import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";

type Props = {
  path: string;
};

const NavItem: React.FC<Props> = ({ children, path }) => {
  return (
    <li>
      <NavLink to={path} className={({ isActive }) => (isActive ? styles.active : undefined)}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
