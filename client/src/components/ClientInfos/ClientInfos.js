import React from "react";
import styles from "./ClientInfos.module.css";
import { Avatar } from "@material-ui/core";

function ClientInfos({ userName, userGsm, userMail, userPic, courses, srcRecep }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Avatar src={userPic}>{userPic}</Avatar>
        <div className={styles.user__infos}>
          <h2>{userName}</h2>
          <p>{userGsm}</p>
          <p>{userMail}</p>
        </div>

        <div className={styles.user__courses}>
          <h2>
            Course<i>(s)</i>:
          </h2>
          <ul>
            {courses && courses.map(({ courseName }) => (
              <li>{courseName}</li>
            ))}
          </ul>
        </div>

        <div className={styles.user__money}>
          <h2>To pay :</h2>
          <h3>250 DT</h3>
        </div>

        <div className={styles.user__download}>
          <a
            href={srcRecep}
            download
          >
            donwload payment receipt
          </a>
        </div>

        <div className={styles.btn}>
          <div className={styles.accept__btn}>Accept</div>

          <div className={styles.refuse__btn}>Refuse</div>
        </div>
      </div>
    </div>
  );
}

export default ClientInfos;
