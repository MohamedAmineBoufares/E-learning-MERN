import React from "react";

import CartItem from "../cartItem/CartItem";
import CartTotal from "../cartTotal/CartTotal";

// Redux

import { useSelector } from "react-redux";

function CartWithItems() {
  const items = useSelector((state) => state.cart.items);
  
  return (
    <div className="row">
      <div className="col-sm-8">
        {items.map(({ fileName, productName, productPrice, _id, productID }) => (
          <CartItem
            key={_id}
            fileName={fileName}
            productName={productName}
            productPrice={productPrice}
            _id={_id}
            productID={productID}
          />
        ))}
      </div>
      <div
        className="col-sm-4 
  d-sm-flex justify-content-sm-center 
  align-items-sm-center order-sm-last 
  order-first mb-3"
      >
        <CartTotal />
      </div>
    </div>
  );
}

export default CartWithItems;
