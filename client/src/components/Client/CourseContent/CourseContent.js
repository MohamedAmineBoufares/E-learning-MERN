import React, { useState } from "react";
import styles from "./CourseContent.module.css";
import FireIcon from "@material-ui/icons/WhatshotOutlined";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import PlayIcon from "@material-ui/icons/PlayArrowOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import PreviewVideo from "../PreviewVideo/PreviewVideo";
import { useSelector } from "react-redux";

function CourseContent({ courseId }) {
  const [isOpen, setIsOpen] = useState(false);

  const course = useSelector((state) => state.products.product);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    
    <div className={styles.container}>
      {/* The left part which contains the course title + a discription + the rating + whishlist button */}

      <div className={styles.Content__left}>
        {course && <h1>{course.productName}</h1>}
        {course && <p>{course.productDesc}</p>}

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
          src={`/uploads/${course && course.fileName}`}
        />

        <div className={styles.watch__preview} onClick={togglePopup}>
          <PlayIcon className={styles.watch__preview__icon} />
          <p>Watch preview</p>
        </div>

        {course && <h1 className={styles.course__price}>{course.productPrice} DT</h1>}

        <div className={styles.buy__course}>
          <ShoppingCartIcon className={styles.buy__course__icon} />
          <p>Add to cart</p>
        </div>
      </div>
      {isOpen && <PreviewVideo handleClose={togglePopup} videoURL={course.previewUrl}/>}
    </div>
  );
}

export default CourseContent;
