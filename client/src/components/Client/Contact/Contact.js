import React from "react";
import styles from "./Contact.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.contact__us}>Contact us</h1>
      <div className={styles.contacts__container}>
        <div className={styles.contacts}>
          <InstagramIcon />
          <h2>@Instagram</h2>
        </div>

        <div className={styles.contacts}>
          <FacebookIcon />
          <h2>@Facebook</h2>
        </div>

        <div className={styles.contacts}>
          <AlternateEmailIcon />
          <h2>mail@mail.tn</h2>
        </div>

        <div className={styles.contacts}>
          <PhoneIcon />
          <h2>+216 12 34 56 78</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
