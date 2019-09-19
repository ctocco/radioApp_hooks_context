import React from "react";
import PropTypes from "prop-types";
import styles from "./ExpandedStationData.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ExpandedStationData = ({ image }) => {
  // image data in API is currently not unique resulting in same image

  return (
    <div className={styles.expandedStationContainer}>
      <FontAwesomeIcon icon={faMinus} className={styles.minus} />
      <img src={image} alt="radio one" />
      <FontAwesomeIcon icon={faPlus} className={styles.plus} />
    </div>
  );
};

ExpandedStationData.propTypes = {
  image: PropTypes.string
};

export default ExpandedStationData;
