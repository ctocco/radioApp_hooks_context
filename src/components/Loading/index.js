import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <>
      <div className={styles.loadingContainer}>
        <img
          src="http://www.socib.es/users/protllan/INSTAC-DASHBOARD-ADVANCED/images/source.gif"
          alt="page loading"
        />
      </div>
    </>
  );
};

export default Loading;
