import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NowPlayingContext } from "../../contexts/currentlyPlaying";
import styles from "./Footer.module.scss";

const Footer = () => {
  // data taken from NowPlayingContext
  const { currentlyPlaying } = useContext(NowPlayingContext);
  return (
    <>
      <footer className={styles.footer}>
        {currentlyPlaying ? (
          <div className={styles.footer__textContainer}>
            <p className={styles.footer__title}>CURRENTLY PLAYING</p>
            <p className={styles.footer__currentStation}>
              {currentlyPlaying[0]} FM {currentlyPlaying[1]}
            </p>
          </div>
        ) : null}
      </footer>
    </>
  );
};

Footer.propTypes = {
  currentlyPlaying: PropTypes.string
};

export default Footer;
