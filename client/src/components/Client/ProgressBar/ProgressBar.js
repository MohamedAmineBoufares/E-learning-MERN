import React from "react";
import styles from "./ProgressBar.module.css";
import { Link } from "react-router-dom";

function ProgressBar({ bgImage, courseName, courseID }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.left}>
        <h1>{courseName}</h1>
      </div>
      <Link to={"/course_video/" + courseID} className={styles.link}>
        <div className={styles.right}>
          <h1>Resume learning</h1>
        </div>
      </Link>
    </div>
  );
}

export default ProgressBar;
