import React from "react";
import styles from "./NavBar.module.scss";
// import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <FontAwesomeIcon icon={faChevronLeft} className={styles.navBar__icon} />
      <h5 className={styles.navBar__header}>STATIONS</h5>
      <FontAwesomeIcon icon={faPowerOff} className={styles.navBar__icon} />
    </nav>
  );
};

export default NavBar;
