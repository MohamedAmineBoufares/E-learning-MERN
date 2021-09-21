import React, { useEffect, useState } from "react";
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

  const [courseURL, setCourseURL] = useState({});

  useEffect(() => {
    if (isAuthenticated()) {
      const userID = getLocalStorage("user")._id;
      dispatch(setAuthorised(userID, courseID));
      dispatch(getProduct(courseID));
    }
  }, [dispatch, courseID]);

  const iFrame = () => (
    <iframe
      title="Course Video"
      className="embed-responsive-item"
      src={courseURL.chapterVideo}
      type="video/mp4"
    ></iframe>
  );

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
                  {course && iFrame()}
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                {course && (
                  <a
                    className="btn btn-primary"
                    href={course.coursePDF}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download course PDF
                  </a>
                )}
              </div>

              <div className="col border border-dark pt-2">
                <div className="row m-2">
                  <h3>About this course</h3>
                </div>

                <div className="row m-2">
                  {course && <p>{course.productDesc}</p>}
                </div>
                <div className="row m-2">
                  <h3>Course chapters</h3>
                </div>
                <ul className="col m-2">
                  {course &&
                    course.chapters.map(
                      ({ _id, chapterName, chapterVideo }) => (
                        <li key={_id}>
                          <button
                            className="btn"
                            href="#"
                            onClick={() =>
                              setCourseURL({ chapterName, chapterVideo })
                            }
                          >
                            {chapterName}
                          </button>
                        </li>
                      )
                    )}
                </ul>
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
