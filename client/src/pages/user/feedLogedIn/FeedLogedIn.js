import React from "react";
import Welcome from "../../../components/user/welcome/Welcome";
import Courses from "../../../components/user/courses/Courses";
import AllCourses from "../../../components/user/allCourses/AllCourses";
import Recommended from "../../../components/user/recommended/Recommended"
import Footer from "../../../components/user/footer/Footer"



function FeedLogedIn() {
  return (
    <div>
      <Welcome />
      <Courses />
      <AllCourses />
      <Recommended/>
      <Footer/>
    </div>
  );
}

export default FeedLogedIn;
