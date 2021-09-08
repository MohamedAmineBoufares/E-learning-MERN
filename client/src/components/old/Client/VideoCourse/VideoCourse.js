import React, { useEffect } from "react";
import styles from "./VideoCourse.module.css";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../redux/actions/productActions";

import { showLoading } from "../../../helpers/loading";
import { setAuthorised } from "../../../redux/actions/userActions";

import { getLocalStorage } from "../../../helpers/localStorage";

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
          <div className={styles.container}>
            <h1>{course.productName}</h1>
            {authorised ? (
              <div>
                <video
                  controls
                  controlsList="nodownload"
                  poster="https://ampjar.com/wp-content/uploads/2019/06/ig-sponsored-hero@2x-970x577.png"
                >
                  <source src={course.videoUrl} type="video/mp4" />
                  Sorry this video can't be diplayed at the moment, due to
                  server issues or your browser does'nt support the video's
                  format
                </video>
                <div className={styles.download__btn}>Download course PDF</div>
              </div>
            ) : (
              <h1>Sorry not sorry !</h1>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default withRouter(VideoCourse);
