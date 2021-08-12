import React from "react";
import styles from "./VideoCourse.module.css";

function VideoCourse() {
  return (
    <div className={styles.container}>
      <video
        controls
        controlsList="nodownload"
        poster="https://ampjar.com/wp-content/uploads/2019/06/ig-sponsored-hero@2x-970x577.png"
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Sorry this video can't be diplayed at the moment, due to server issues
        or your browser does'nt support the video's format
      </video>

      <div className={styles.download__btn}>
          Download course PDF
      </div>
    </div>
  );
}

export default VideoCourse;
