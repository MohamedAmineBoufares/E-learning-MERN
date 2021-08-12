import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../../features/cart/cartSlice";
import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";
import styles from "./CartContent.module.css";

function CartContent() {
  const items = useSelector(selectItems);
  return (
    <div className={styles.container}>
      <h1>Your Cart Amigo</h1>
      <div className={styles.main}>
        <div className={styles.cart__item}>
          {items.map(({ src, courseName, coursePrice, courseID, quantity }, i) => (
            <CartItem
              key={i}
              src={src}
              courseName={courseName}
              coursePrice={coursePrice}
              courseID={courseID}
              quantity={quantity}
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
