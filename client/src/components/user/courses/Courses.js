import React from "react";
import CourseCard from "../../../components/user/CourseCard/CourseCard";
import "./Courses.css";

function Courses() {
  return (
    <div class="col mt-5">
      <div class="row">
        <div class="col-sm-12">
          <h1 className="lets__start mb-5">Let's start learning, UserName</h1>
        </div>
      </div>

      <div class="row justify-content-sm-center">
        <div class="container">
          <div className="row justify-content-sm-start row-cols-sm-3">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
