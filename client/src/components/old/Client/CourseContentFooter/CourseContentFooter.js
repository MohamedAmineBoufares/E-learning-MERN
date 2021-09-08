import React from "react";
import styles from "./CourseContentFooter.module.css";

function CourseContentFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.top__container}>
        <div className={styles.top__left}>
          <h1>What you will learn</h1>
          <ul className={styles.ul__top}>
            <li>How to Instagram spnosoring</li>
            <li>How to get paid on your posts and stories</li>
            <li>How to increase your followers</li>
          </ul>
        </div>
        <div className={styles.top__right}>
          <h1>Requirements</h1>
          <ul className={styles.ul__top}>
            <li>An Instagram account</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom__container}>
        <h1>Course content</h1>
        <ol className={styles.ol__bottom}>
          <li>What is Instagram sponsoring</li>
          <li>Switch to a professional Insatagram Account</li>
          <li>Create a Payonner Account</li>
          <li>Sponsor a post or a story</li>
          <li>Attract more followers</li>
        </ol>
      </div>
    </div>
  );
}

export default CourseContentFooter;
