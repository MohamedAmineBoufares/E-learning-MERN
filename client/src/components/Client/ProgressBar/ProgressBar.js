import React from "react";
import styles from "./ProgressBar.module.css";
import FlagIcon from "@material-ui/icons/FlagOutlined";

function ProgressBar( { percentage }) {
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <h2 className={styles.infos__num}> { percentage !== 0 ? percentage + ' %' : ''   } </h2>
        <FlagIcon fontSize="large" style={{ color: "#E76F51" }} />
      </div>

      <div className={styles.bar__container}>
          <div className={styles.bar} style={{width: `${ percentage }%` }}>
          </div>
      </div>
    </div>
  );
}

export default ProgressBar;
