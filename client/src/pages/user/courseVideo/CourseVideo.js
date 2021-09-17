import React, { useEffect } from "react";
import "./CourseVideo.css";

import { withRouter, Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/actions/productActions";
import { setAuthorised } from "../../../redux/actions/userActions";

import { getLocalStorage } from "../../../helpers/localStorage";

import { isAuthenticated } from "../../../helpers/auth";
import { showLoading } from "../../../helpers/loading";

function CourseVideo(props) {
  const courseID = props.match.params.courseID;

  const course = useSelector((state) => state.products.oneProd);
  const authorised = useSelector((state) => state.courses.authorised);

  const { loading } = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      const userID = getLocalStorage("user")._id;
      dispatch(setAuthorised(userID, courseID));
      dispatch(getProduct(courseID));
    }
  }, [dispatch, courseID]);

  return (
    <div className="col mt-5 pb-5">
      {loading ? (
        <div className="row">{showLoading()}</div>
      ) : (
        <div className="col container">
          <div className="row">
            <Link
              to="/feed"
              className="btn btn-outline-info d-flex justify-content-center align-items-center"
            >
              <span className="fas fa-arrow-left mr-2"></span> Go Back
            </Link>
          </div>

          {course && (
            <h1 className="text-center mt-2 mb-5">{course.productName}</h1>
          )}
          {authorised ? (
            <div className="col">
              <div className="row justify-content-center">
                <div className="embed-responsive embed-responsive-16by9 mb-4 w-75">
                  {course && (
                    <iframe
                      title="Course Video"
                      className="embed-responsive-item"
                      src={course.videoUrl}
                      type="video/mp4"
                    ></iframe>
                  )}
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <button className="btn btn-primary">Download course PDF</button>
              </div>

              <div className="col border border-dark pt-2">
                <div className="row m-2">
                  <h3>About this course</h3>
                </div>

                <div className="row m-2">
                  {course && <p>{course.productDesc}</p>}
                </div>
              </div>
            </div>
          ) : (
            <h1>Sorry not sorry !</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default withRouter(CourseVideo);
