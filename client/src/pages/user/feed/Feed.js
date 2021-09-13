import React from "react";
import Welcome from "../../../components/user/welcome/Welcome";
import Courses from "../../../components/user/courses/Courses";
import AllCourses from "../../../components/user/allCourses/AllCourses";
import Recommended from "../../../components/user/recommended/Recommended";
import Footer from "../../../components/user/footer/Footer";
import WhyJoinUS from "../../../components/user/WhyJoinUS/WhyJoinUS";
import FeedBack from "../../../components/user/feedBack/FeedBack";

import { isAuthenticated } from "../../../helpers/auth";

function Feed() {
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
