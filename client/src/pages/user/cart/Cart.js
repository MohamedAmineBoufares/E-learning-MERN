import React from "react";
import CartItem from "../../../components/user/cartItem/CartItem";
import CartTotal from "../../../components/user/cartTotal/CartTotal";

function Cart() {
  return (
    <div className="col" style={{ marginTop: "8rem" }}>
      <div className="row">
        <div className="col-sm-8 ord">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="col-sm-4 d-sm-flex justify-content-sm-center align-items-sm-center order-sm-last order-first mb-3">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default Cart;
