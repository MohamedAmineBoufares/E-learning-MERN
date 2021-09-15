import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../redux/actions/productActions";
import "./VideoCourse.css"

import { showLoading } from "../../../helpers/loading";
import { setAuthorised } from "../../../redux/actions/userActions";

import { getLocalStorage } from "../../../helpers/localStorage";
import Footer from "../../footer/Footer";


function VideoCourse(props) {
  const courseID = props.match.params.courseID;

  const course = useSelector((state) => state.products.product);
  const authorised = useSelector((state) => state.courses.authorised);

  const { loading } = useSelector((state) => state.loading);

  const userID = getLocalStorage("user")._id;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Eni theni ?");
    dispatch(setAuthorised(userID, courseID));
    dispatch(getProduct(courseID));
  }, [dispatch, courseID]);

  return (
    <div>
      {loading ? (
        <div>{showLoading()}</div>
      ) : (
        course && (
          <div>
            <Link to="/user/dashboard">
              <span className="fas fa-arrow-left">Go Back</span>
            </Link>
            <p className="prod__name">{course.productName}</p>
            {authorised ? (
              <div>
                <div className="video">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" 
                            src={course.videoUrl} 
                            type="video/mp4" 
                            allowfullscreen>
                    </iframe>
                  </div>
                </div>
              
                <p className="about__course">About this course</p>
                  <p className="prod__desc">{course.productDesc}</p>
                  <div className="download__btn">Download course PDF</div>
                </div>
           
            ) : (
              <h1>Sorry not sorry !</h1>
            )}
          </div>
        )
      )}
      <Footer />
    </div>
  );
}

export default withRouter(VideoCourse);
