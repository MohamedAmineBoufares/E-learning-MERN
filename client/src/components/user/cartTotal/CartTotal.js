import React, { useState } from "react";

// Redux

import { useSelector } from "react-redux";
import PaymentPopUp from "../paymentPopUp/PaymentPopUp";

function CartTotal() {
  const items = useSelector((state) => state.cart.items);

  const [isOpen, setIsOpen] = useState(0);

  let totalPrice = 0;

  const togglePopup = () => {
    setIsOpen(isOpen + 1);
  };

  return (
    <div className="col">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Total</h2>
          <h3 class="card-description">
            <strong>
              {items &&
                items.reduce((a, b) => {
                  totalPrice = a + b.productPrice;
                  return totalPrice;
                }, 0)}{" "}
              DT{" "}
            </strong>
          </h3>
        </div>

        <div className="card-footer d-flex justify-content-end align-items-center">
          <button
            class="btn btn-primary d-flex justify-content-center align-items-center"
            data-toggle="modal"
            data-target="#paymentPopUp"
            onClick={togglePopup}
          >
            <i class="fas fa-credit-card fa-lg mr-2" aria-hidden="true"></i>
            Chekout
          </button>
        </div>
      </div>
      {isOpen !== 0 && <PaymentPopUp total={totalPrice} />}
    </div>
  );
}

export default CartTotal;
