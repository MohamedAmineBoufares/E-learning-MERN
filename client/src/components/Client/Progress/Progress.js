import React from "react";
import styles from "./Progress.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Link } from "react-router-dom";

function Progress() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Digital marketing 101 crash course</h1>
        <ProgressBar percentage="50" />
      </div>
      <Link to="/course_video" className={styles.link}>
        <div className={styles.right}>
          <h1>Resume learning</h1>
        </div>
      </Link>
    </div>
  );
}

export default Progress;
