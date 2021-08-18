import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";
import styles from "./CartContent.module.css";

function CartContent() {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className={styles.container}>
      <h1>Your Cart Amigo</h1>
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
    </div>
  );
}

export default CartContent;
