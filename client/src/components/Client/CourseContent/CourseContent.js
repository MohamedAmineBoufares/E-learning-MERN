import React, { useState } from "react";
import styles from "./CourseContent.module.css";
import FireIcon from "@material-ui/icons/WhatshotOutlined";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import PlayIcon from "@material-ui/icons/PlayArrowOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import PreviewVideo from "../PreviewVideo/PreviewVideo";

function CourseContent() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.container}>
      {/* The left part which contains the course title + a discription + the rating + whishlist button */}

      <div className={styles.Content__left}>
        <h1>Hi</h1>
        <p>Hi</p>

        <div className={styles.rating__container}>
          <p className={styles.p}>4.0</p>

          <div className={styles.rating__fire}>
            <FireIcon className={styles.fire__icon} />
            <FireIcon className={styles.fire__icon} />
            <FireIcon className={styles.fire__icon} />
            <FireIcon className={styles.fire__icon} />
            <FireIcon className={styles.fire__icon__5} />
          </div>
        </div>

        <div className={styles.add__whishlist}>
          <FavoriteIcon className={styles.add__whishlist__icon} />
          <p>Add to wishlist</p>
        </div>
      </div>

      {/* The right part which contains the course image + watch preview button + the price + buy button */}

      <div className={styles.Content__left}>
        <img
          className={styles.course__img}
          title="Course"
          alt="the course"
          src="https://ampjar.com/wp-content/uploads/2019/06/ig-sponsored-hero@2x-970x577.png"
        />

        <div className={styles.watch__preview} onClick={togglePopup}>
          <PlayIcon className={styles.watch__preview__icon} />
          <p>Watch preview</p>
        </div>

        <h1 className={styles.course__price}>200 DT</h1>

        <div className={styles.buy__course}>
          <ShoppingCartIcon className={styles.buy__course__icon} />
          <p>Add to cart</p>
        </div>
      </div>
      {isOpen && <PreviewVideo handleClose={togglePopup} />}
    </div>
  );
}

export default CourseContent;
