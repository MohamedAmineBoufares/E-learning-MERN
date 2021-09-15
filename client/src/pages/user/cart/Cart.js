import React, { useEffect } from "react";
import CartItem from "../../../components/user/cartItem/CartItem";
import CartTotal from "../../../components/user/cartTotal/CartTotal";

//redux
import { useDispatch, useSelector } from "react-redux";

import { getUserCart } from "../../../redux/actions/cartActions";
import { getLocalStorage } from "../../../helpers/localStorage";
import { isAuthenticated } from "../../../helpers/auth";
import CartWithItems from "../../../components/user/cartWithItems/CartWithItems";
import EmptyCart from "../../../components/emptyCart/EmptyCart";

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
    <div className="col pb-5" style={{ marginTop: "8rem" }}>
      {items.length !== 0 ? <CartWithItems /> : <EmptyCart />}
    </div>
  );
}

export default Cart;
