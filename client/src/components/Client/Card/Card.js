import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import FireIcon from "@material-ui/icons/WhatshotOutlined";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

import { getLocalStorage } from "../../../helpers/localStorage";
import { showErrorMsg, showSuccessMsg } from "../../../helpers/message";
import { showLoading } from "../../../helpers/loading";

// REDUX !
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";
import { addToFavorite } from "../../../redux/actions/favoriteActions";
import { clearMessages } from "../../../redux/actions/messageActions";

function Card({ product }) {
  // Redux states
  const { loading } = useSelector((state) => state.loading);
  const { successMsg, errorMsg } = useSelector((state) => state.messages);

  // states for the request
  const [userID, setUserID] = useState();

  // Constes so I can recall them inside an object, later
  const productName = product.productName;
  const fileName = product.fileName;
  const productPrice = product.productPrice;
  const _id = product._id;

  const dispatch = useDispatch();

  useEffect(() => {
    setUserID(getLocalStorage("user")._id);
    dispatch(clearMessages());
  }, [dispatch]);

  const addCart = () => {
    dispatch(clearMessages());
    const item = {
      fileName,
      productName,
      productPrice,
      _id,
    };

    // Sending the course to store
    dispatch(addToCart(item, userID));
  };

  const addFav = () => {
    const item = {
      fileName,
      productName,
      productPrice,
      _id,
    };

    // Sending the course to store
    dispatch(addToFavorite(item));
  };

  return (
    <div className={styles.container}>
      <Link to={"/course_content/" + _id} className={styles.link}>
        <img
          className={styles.img}
          alt="Course"
          title={product.productName}
          src={`/uploads/${product.fileName}`}
        />

        <h2 className={styles.course__name}>{product.productName}</h2>

        <div className={styles.rating__container}>
          {/* <p className={styles.p}>{courseRating}</p> */}

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
          {loading ? (
            <div>{showLoading()}</div>
          ) : (
            <div>
              <IconButton onClick={addFav}>
                <FavoriteIcon />
              </IconButton>

              <IconButton onClick={addCart}>
                <ShoppingCartIcon />
              </IconButton>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

export default Card;
