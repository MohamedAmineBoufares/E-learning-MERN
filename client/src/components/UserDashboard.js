import React, { useEffect } from "react";
//components
import Contact from "./Client/Contact/Contact";
import Progress from "./Client/Progress/Progress";
import UserBody from "./UserBody";
//redux
import { useDispatch } from "react-redux";
import { getCategories } from "../redux/actions/categoryActions";
import { getProducts } from "../redux/actions/productActions";

import { getUserCart } from "../redux/actions/cartActions";
import { getLocalStorage } from "../helpers/localStorage";

const UserDashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    dispatch(getUserCart(getLocalStorage("user")._id));
  }, [dispatch]);

  return (
    <section>
      <Progress />

      <UserBody />
      <Contact />
    </section>
  );
};

export default UserDashboard;
/* const UserDashboard = () => {

return (
    <Header />
)
}

export default UserDashboard; */
