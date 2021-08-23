import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Courses.module.css";
import axios from "../../../utils/axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  const getCourses = () => {
    axios.get("/get/allCourses").then((res) => {
      setCourses(res.data);
    });
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.courses__title}>Our courses</h1>
      <div className={styles.courses__cards}>
        {courses.map(
          ({ courseImageURL, productName, coursePrice, _id }, i) => (
          <Card
            key={i}
            courseID={_id}
            productName={productName}
            courseRating="4.0"
            coursePrice={coursePrice}
            src={courseImageURL}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
