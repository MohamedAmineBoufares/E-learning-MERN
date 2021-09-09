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
    slidesToShow: 3,
    slidesToScroll: 1,responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="col">
      <div class="row">
        <div class="col">
          <h1 className="col-sm-12 mb-5  what__to__learn">What to learn next ?</h1>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col col-sm-10">
          <Slider {...settings}>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>

            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
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
