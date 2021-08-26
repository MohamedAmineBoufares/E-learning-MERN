import React, { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Progress.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector } from "react-redux";

function Progress() {
  const courses = useSelector((state) => state.courses.courses);

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
          courses.map(({ course }) => {
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
