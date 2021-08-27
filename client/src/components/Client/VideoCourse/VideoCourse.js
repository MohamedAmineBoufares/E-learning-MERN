import React, { useEffect } from "react";
import styles from "./VideoCourse.module.css";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET_COURSE } from "../../../redux/constants/userConstants";
import { getProduct } from "../../../redux/actions/productActions";

function VideoCourse(props) {
  const courseID = props.match.params.courseID;
  const course = useSelector((state) => state.products.product);
  const dispatch = useDispatch();

  console.log(course);
  useEffect(() => {
    dispatch(getProduct(courseID));
  }, [dispatch, courseID]);

  return (
    <div>
      {course && (
        <div className={styles.container}>
          <h1>{course.productName}</h1>
          <video
            controls
            controlsList="nodownload"
            poster="https://ampjar.com/wp-content/uploads/2019/06/ig-sponsored-hero@2x-970x577.png"
          >
            <source src={course.videoUrl} type="video/mp4" />
            Sorry this video can't be diplayed at the moment, due to server
            issues or your browser does'nt support the video's format
          </video>
          <div className={styles.download__btn}>Download course PDF</div>
        </div>
      )}
    </div>
  );
}

export default withRouter(VideoCourse);
