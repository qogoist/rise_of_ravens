import React from "react";
import NavItem from "../NavItem";
import styles from "./Navigation.module.css";

type Props = {};

const Navigation: React.FC<Props> = ({}) => {
  return (
    <ul className={styles.nav}>
      <NavItem path="/">Home</NavItem>
      <NavItem path="/dashboard">Dashboard</NavItem>
      <NavItem path="/project">Projekt</NavItem>
      <NavItem path="/studio">Design Studio</NavItem>
    </ul>
  );
};

export default Navigation;
