import React from "react";
import CourseInfosCard from "../CourseInfosCard/CourseInfosCard";
import "./CourseInfosBody.css";

function CourseInfosBody() {
  return (
    <div class="col mt-sm-5 course__infos__container">
      <div class="row course__infos__text">
        <div class="col-sm-8 pt-5">
          <div className="container">
            <h1>Course Name</h1>
            <p>Course description</p>
            <p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </p>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-sm-8 pt-5">
          <div className="container course__infos__what__youll__learn p-4">
            <h1 className="text-center mb-4">What you will learn</h1>
            <ul className="row row-cols-2 course__infos__what__youll__learn_ul">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-sm-end">
        <div class="col-sm-4 mt-5 course__infos__card">
          <CourseInfosCard/>
        </div>
      </div>
    </div>
  );
}

export default CourseInfosBody;
