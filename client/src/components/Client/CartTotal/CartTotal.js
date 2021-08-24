import React, { useState } from "react";
import { useSelector } from "react-redux";
import PurchaseMessage from "../PurchaseMessage/PurchaseMessage";
import styles from "./CartTotal.module.css";

function CartTotal() {
  const items = useSelector((state) => state.cart.items);

  const [isOpen, setIsOpen] = useState(false);

  let total = 0;

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <p>Total:</p>
      <h1>
        {items &&
          items.reduce((a, b) => {
            total = a + b.productPrice;
            return total;
          }, 0)}{" "}
        DT
      </h1>
      <div className={styles.checkout__btn} onClick={togglePopup}>
        Checkout
      </div>
      <div className={styles.coupon}>
        <h3>Apply a coupon:</h3>

        <div className={styles.coupon__input}>
          <form>
            <input type="text" placeholder="Enter coupon" />
            <button>Apply</button>
          </form>
        </div>
      </div>
      {isOpen && <PurchaseMessage handleClose={togglePopup} total={total} />}
    </div>
  );
}

export default CartTotal;
