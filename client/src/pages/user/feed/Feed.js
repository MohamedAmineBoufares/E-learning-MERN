import React from "react";
import Welcome from "../../../components/user/welcome/Welcome";
import Courses from "../../../components/user/courses/Courses";
import AllCourses from "../../../components/user/allCourses/AllCourses";
import Recommended from "../../../components/user/recommended/Recommended";
import Footer from "../../../components/user/footer/Footer";
import WhyJoinUS from "../../../components/user/WhyJoinUS/WhyJoinUS";
import FeedBack from "../../../components/user/feedBack/FeedBack";

function Feed() {
  return (
    <div>
      <Welcome />
      <WhyJoinUS />
      <Courses />
      <AllCourses />
      <Recommended />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default Feed;
