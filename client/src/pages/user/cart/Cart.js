import React, { useEffect } from "react";
import CartItem from "../../../components/user/cartItem/CartItem";
import CartTotal from "../../../components/user/cartTotal/CartTotal";

//redux
import { useDispatch, useSelector } from "react-redux";

import { getUserCart } from "../../../redux/actions/cartActions";
import { getLocalStorage } from "../../../helpers/localStorage";
import { isAuthenticated } from "../../../helpers/auth";

function Cart() {
  // Redux states
  const { loading } = useSelector((state) => state.loading);
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      const userID = getLocalStorage("user")._id;
      dispatch(getUserCart(userID));
    }
  }, [dispatch]);

  return (
    <div className="col pb-5" style={{ margin: "8rem 0" }}>
      <div className="row">
        <div className="col-sm-8 ord">
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
        <div
          className="col-sm-4 
          d-sm-flex justify-content-sm-center 
          align-items-sm-center order-sm-last 
          order-first mb-3"
        >
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default Cart;
