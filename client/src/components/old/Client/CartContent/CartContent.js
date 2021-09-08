import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";
import styles from "./CartContent.module.css";

//redux
import { useDispatch } from "react-redux";

import { getUserCart } from "../../../redux/actions/cartActions";
import { getLocalStorage } from "../../../helpers/localStorage";
import { getUserFavorite } from "../../../redux/actions/favoriteActions";
import { showLoading } from "../../../helpers/loading";

function CartContent() {
  // Redux states
  const { loading } = useSelector((state) => state.loading);
  const items = useSelector((state) => state.cart.items);

  const userID = getLocalStorage("user")._id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCart(userID));
    dispatch(getUserFavorite(userID));
  }, [dispatch, userID]);

  return (
    <div className={styles.container}>
      <h1>Your Cart Amigo</h1>
      {loading ? (
        <div>{showLoading()}</div>
      ) : (
        <div className={styles.main}>
          <div className={styles.cart__item}>
            {items &&
              items.map(({ fileName, productName, productPrice, _id }) => (
                <CartItem
                  key={_id}
                  fileName={fileName}
                  productName={productName}
                  productPrice={productPrice}
                  _id={_id}
                />
              ))}
          </div>
          <div className={styles.cart__total}>
            <CartTotal />
          </div>
        </div>
      )}
    </div>
  );
}

export default CartContent;
