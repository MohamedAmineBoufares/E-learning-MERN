import React from "react";
import styles from "./PurchaseMessage.module.css";

export default function PurchaseMessage({ handleClose }) {
  return (
    <div className={styles.popup__box}>
      <div className={styles.box}>
        <h1>Important !</h1>
        <p>
          Dear Moahmed Amine, In order to buy this course, all you need to do is
          to <strong>visit the neareast the post office to your house</strong>{" "}
          and send money to this account number{" "}
          <span style={{ color: "#2A9D8F" }}>“ 123456789217 “</span> .<br />{" "}
          After doing that, all you need to do is writing the transaction number
          in this box here :
        </p>
        <div className={styles.transaction__number__container}>
          <input
            className={styles.transaction__number}
            placeholder="Write transaction number here"
            type="number"
            min="10000"
            max="20000"
          />
          <button>
            <a
              href="https://forms.office.com/Pages/ShareFormPage.aspx?id=TWbW27lO60aZ2FxDuhU8YdzCfclzGTBEn6GEFASMojRUNE8xQk1XSDdOTDk5QjdYQ1ZOS09MUUg4Ty4u&sharetoken=e2cndCxdIlh4O5lWMQgd&fbclid=IwAR2ReXWDUpNIkDbGM31t38Ft6t9iz3E0WstDGGx5wcIWzXCZoMAhiNXNkKA"
              target="_blank"
            >Submit</a>
          </button>
        </div>

        <p>
          After dowing all the above steps, all you need to do now is to wait
          the admin’s approvel, this may take a while <i>( at most 48h )</i>.
        </p>
        <br />
        <p>
          We thank you for your patience, and we hope you enjoy this course 😄 .
        </p>
      </div>
    </div>
  );
}
