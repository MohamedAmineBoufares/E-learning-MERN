import React from "react";
import "./AllCourses.css";
import AllCoursesCard from "../AllCoursesCard/AllCoursesCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="col mt-5 all__courses__container">
      <div class="row">
        <div class="col-sm-12">
          <h1 className="what__to__learn">What to learn next ?</h1>
        </div>
      </div>

      <div className="row mb-5 justify-content-center">
        <div class="input-group col-5 justify-content-center">
          <select class="custom-select" id="inputGroupSelect04">
            <option selected>All courses</option>
            <option value="1">Marketing</option>
            <option value="2">Spnosoring</option>
            <option value="3">Freelancing</option>
          </select>
          <div class="input-group-append">
            <button class="btn btn-danger" type="button">
              Select
            </button>
          </div>
        </div>
      </div>

      <div class="row justify-content-sm-center">
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
