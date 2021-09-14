import React, { useEffect } from "react";
import Welcome from "../../../components/user/welcome/Welcome";
import Courses from "../../../components/user/courses/Courses";
import AllCourses from "../../../components/user/allCourses/AllCourses";
import Recommended from "../../../components/user/recommended/Recommended";
import Footer from "../../../components/user/footer/Footer";
import WhyJoinUS from "../../../components/user/WhyJoinUS/WhyJoinUS";
import FeedBack from "../../../components/user/feedBack/FeedBack";

import { isAuthenticated } from "../../../helpers/auth";

//redux
import { useDispatch } from "react-redux";

import { getUserCart } from "../../../redux/actions/cartActions";
import { getLocalStorage } from "../../../helpers/localStorage";
import { getUserFavorite } from "../../../redux/actions/favoriteActions";
import { getUserCourses } from "../../../redux/actions/userActions";

function Feed() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 0) {
      const userID = getLocalStorage("user")._id;
      dispatch(getUserCart(userID));
      dispatch(getUserFavorite(userID));
      dispatch(getUserCourses(userID));
      console.log("Hola !");
    }
  }, [dispatch]);
  return (
    <div>
      <Welcome />
      <WhyJoinUS />
      {isAuthenticated() && isAuthenticated().role === 0 && <Courses />}
      <AllCourses />
      <Recommended />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default Feed;
