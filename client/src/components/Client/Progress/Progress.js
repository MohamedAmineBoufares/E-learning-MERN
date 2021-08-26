import React, { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Progress.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";

import { useSelector } from "react-redux";

function Progress() {
  const courses = useSelector((state) => state.courses.courses);
  const allCourses = [];

  const displayMessage = () => {
    jibhomLkol();
    //console.log("courses: ", allCourses);
  };

  const jibhomLkol = () => {
    console.log(courses);

    courses.map(({ course }) => {
      course.map((item) => {
        console.log(item);
      });
    });

    //courses.map(({ course }) => allCourses.push(course));

    // for (let index = 0; index < allCourses.length; index++) {
    //   const item = allCourses[index];
    //   //console.log(item)

    //   for (let index_2 = 0; index_2 < item.length; index_2++) {
    //     const element = item[index_2];
    //     return (
    //       <ProgressBar
    //         key={element._id}
    //         courseName={element.courseName}
    //         courseID={element.courseID}
    //       />
    //     );
    //   }
    // }

    // allCourses.map((item) => {
    //   item.map((final) => {
    //     console.log(final);
    //   });
    // });
  };

  // useEffect(() => {
  //   courses.map(({ course }) => allCourses.push(course));
  // }, [courses]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slider}>
        {courses &&
          courses.map(({ course }, i) => {
            return course.map(({ courseName, courseID, _id }) => (
              <ProgressBar
                courseName={courseName}
                courseID={courseID}
                key={_id}
              />
            ));
          })}
      </Slider>
    </div>
  );
}

export default Progress;
