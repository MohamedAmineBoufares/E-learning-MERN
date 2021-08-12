import React from "react";
import styles from "./Card.module.css";
import FireIcon from "@material-ui/icons/WhatshotOutlined";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import { addToFav } from "../../../features/favorite/favoriteSlice";

function Card({product, src, productName, courseRating, productPrice, courseID, quantity=1 }) {
  const dispatch = useDispatch();
  const addCart = () => {
    const item = {
      src,
      productName,
      courseRating,
      productPrice,
      courseID,
      quantity,
    };

    // Sending the course to store
    dispatch(addToCart(item));
  };

  const addFav = () => {
    const item = {
      src,
      productName,
      courseRating,
      productPrice,
      courseID,
    };
    dispatch(addToFav(item));
  };

  return (
    <div className={styles.container}>
      <Link to="/course_content" className={styles.link}>
        <img className={styles.img} alt="Course" title={productName} src={`/uploads/${product.fileName}`} />

        <h2 className={styles.course__name}>{product.productName}</h2>

        <div className={styles.rating__container}>
          <p className={styles.p}>{courseRating}</p>

          <div className={styles.rating__fire}>
            <FireIcon className={styles.fire__icon} />
            <FireIcon className={styles.fire__icon} />
            <FireIcon className={styles.fire__icon} />
            <FireIcon className={styles.fire__icon} />
            <FireIcon className={styles.fire__icon__5} />
          </div>
        </div>
      </Link>


      <div className={styles.price__container}>
        <p className={styles.p}>{product.productPrice} DT</p>

        <span className={styles.price__icons}>
          <IconButton onClick={addFav}>
            <FavoriteIcon />
          </IconButton>

          <IconButton onClick={addCart}>
            <ShoppingCartIcon />
          </IconButton>
        </span>
      </div>
    </div>
  );
}

export default Card;
