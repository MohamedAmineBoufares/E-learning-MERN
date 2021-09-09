import React from "react";
import CourseCard from "../../../components/user/CourseCard/CourseCard";
import "./AllCourses.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AllCourses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="col all__courses__container">
      <div class="row">
        <div class="col-sm-12">
          <h1 className="what__to__learn mb-5">What to learn next ?</h1>
        </div>
      </div>

      <div class="row justify-content-center bg-danger">
        <div class="col col-sm-8 ">
          <Slider {...settings}>
            <div className="row container row-cols-2">
              <CourseCard />
              <CourseCard />
            </div>

            <div className="row row row-cols-2">
              <CourseCard />
              <CourseCard />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;

{
  /* <div
id="carouselExampleControls"
class="carousel slide badge-danger"
data-ride="carousel"
>
<div class="carousel-inner justify-content-center">
  <div class="carousel-item active">
    <div className="row row-cols-4">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  </div>

  <div class="carousel-item">
    <div className="row row-cols-4">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  </div>
</div>
<a
  class="carousel-control-prev"
  href="#carouselExampleControls"
  role="button"
  data-slide="prev"
>
  <span
    class="carousel-control-prev-icon"
    aria-hidden="true"
  ></span>
  <span class="sr-only">Previous</span>
</a>
<a
  class="carousel-control-next"
  href="#carouselExampleControls"
  role="button"
  data-slide="next"
>
  <span
    class="carousel-control-next-icon"
    aria-hidden="true"
  ></span>
  <span class="sr-only">Next</span>
</a>
</div> */
}
