import React, { useEffect } from "react";
import CourseInfosCard from "../CourseInfosCard/CourseInfosCard";
import "./CourseInfosBody.css";

import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../redux/actions/productActions";
import PreviewVideoPopUp from "../previewVideoPopUp/PreviewVideoPopUp";

function CourseInfosBody({ courseID }) {
  const course = useSelector((state) => state.products.oneProd);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(courseID));
  }, [dispatch, courseID]);
  return (
    <div class="col mt-sm-5 course__infos__container">
      <div class="row course__infos__text">
        <div class="col-sm-8 pt-5">
          <div className="container">
            {course && <h1>{course.productName}</h1>}
            {course && <p>{course.productDesc}</p>}
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

      <div className="row d-flex justify-content-sm-end">
        <div class="col-sm-4 mt-5 course__infos__card">
          {course && (
            <CourseInfosCard
              coursePrice={course.productPrice}
              videoSrc={course.previewUrl}
            />
          )}
        </div>
      </div>

      <div class="row">
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
  
    </div>
  );
}

export default CourseInfosBody;
