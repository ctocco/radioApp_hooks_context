import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NowPlayingContext } from "../../contexts/currentlyPlaying";
import ExpandedStationData from "../ExpandedStationData";
import styles from "./RadioStationList.module.scss";

const RadioStationList = ({ name, frequency, image }) => {
  const { currentlyPlaying, setNowPlaying } = useContext(NowPlayingContext);
  const updateCurrentlyPlaying = [name, frequency, image];
  // if current component is selected update currentlyPlaying with current name
  const handlePlaying = () => {
    setNowPlaying(updateCurrentlyPlaying);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.radioItemContainer}>
        <li onClick={handlePlaying} className={styles.radioItem__expand}>
          <div>{name} FM</div>
          <div>{frequency}</div>
        </li>
        {currentlyPlaying[0] === name ? (
          <ExpandedStationData image={image} />
        ) : null}
      </ul>
    </div>
  );
};

RadioStationList.propTypes = {
  name: PropTypes.string,
  frequency: PropTypes.number,
  image: PropTypes.string
};

export default RadioStationList;
