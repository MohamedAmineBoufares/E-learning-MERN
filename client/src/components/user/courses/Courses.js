import React, { useEffect, useState } from "react";

import CourseCard from "../../../components/user/CourseCard/CourseCard";
import "./Courses.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isAuthenticated } from "../../../helpers/auth";
import { getLocalStorage } from "../../../helpers/localStorage";

import arrowDown from "../../assets/down-arrow.svg";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getUserCourses } from "../../../redux/actions/userActions";

function Courses() {
  const [userName, setUserName] = useState("");

  // Redux states
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    if (isAuthenticated()) {
      const name = getLocalStorage("user").username;
      const userID = getLocalStorage("user").userid;
      setUserName(name);
      dispatch(getUserCourses(userID));
    }
  }, [dispatch]);

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
          <h1 className="lets__start mb-5">Let's start learning, {userName}</h1>
        </div>
      </div>

      <div class="row justify-content-sm-center">
        <div class="col col-sm-10">
          <Slider {...settings}>
            {courses && courses.length !== 0 ? (
              courses.map(({ course }) => {
                return course.map(
                  ({ courseName, courseID, _id, courseDesc, courseSrc }) => (
                    <CourseCard
                      courseName={courseName}
                      courseID={courseID}
                      courseDesc={courseDesc}
                      courseSrc={courseSrc}
                      key={_id}
                    />
                  )
                );
              })
            ) : (
              <div className="container d-flex flex-column align-items-center">
                <h1>Well, seems you don't have any course</h1>
                <h4 className="mb-5 mt-4">
                  You can scroll down and see our courses and, of course, buy one. 
                </h4>
                <img
                  className="img-fluid"
                  src={arrowDown}
                  alt="arrow down icon"
                  title="an arrow down"
                  width="50"
                />
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Courses;
