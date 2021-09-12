import React from "react";

import CourseCard from "../../../components/user/CourseCard/CourseCard";
import "./Courses.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Courses() {
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
    <div class="col courses__container">
      <div class="row">
        <div class="col-sm-12">
          <h1 className="lets__start mb-5">Let's start learning, UserName</h1>
        </div>
      </div>

      <div class="row justify-content-sm-center">
        <div class="col col-sm-10">
          <Slider {...settings}>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Courses;
