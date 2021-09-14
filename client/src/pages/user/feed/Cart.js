import React from "react";
import CartItem from "../../../components/user/cartitem/CartItem";
import CartTotal from "../../../components/user/carttotal/CartTotal";

function Cart() {
  return (
    <div className="col" style={{marginTop:"5rem"}}>
      <div className="row">
        <div className="col-8">
          <CartItem />
          <CartItem />
          <CartItem />
         
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <CartTotal />
        </div>

      </div>
    </div>
  );
}

export default Cart;
