import React from "react";
import CourseCard from "../../../components/user/CourseCard/CourseCard";
import "./AllCourses.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllCoursesCard from "../../../components/user/AllCoursesCard/AllCoursesCard";

function AllCourses() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="col">
      <div class="row">
        <div class="col-sm-12">
          <h1 className="mb-5  what__to__learn">
            What to learn next ?
          </h1>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col col-sm-10">
          <Slider {...settings}>
            <AllCoursesCard />
            <AllCoursesCard />
            <AllCoursesCard />
            <AllCoursesCard />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
