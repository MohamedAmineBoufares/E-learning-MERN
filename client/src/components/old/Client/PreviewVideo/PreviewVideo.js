import React from "react";
import styles from "./PreviewVideo.module.css";

function PreviewVideo({ handleClose, videoURL }) {
  return (
    <div className={styles.popup__box}>
      <div className={styles.box}>
        <div className={styles.close__icon} onClick={handleClose}>
          <p>X</p>
        </div>

        <video
          controls
          controlsList="nodownload"
          poster="https://ampjar.com/wp-content/uploads/2019/06/ig-sponsored-hero@2x-970x577.png"
        >
          <source src={videoURL} type="video/mp4" />
          Sorry this video can't be diplayed at the moment, due to server issues
          or your browser does'nt support the video's format
        </video>
      </div>
    </div>
  );
}

export default PreviewVideo;
