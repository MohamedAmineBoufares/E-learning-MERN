import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import CourseContent from "../../components/Client/CourseContent/CourseContent";
import CourseContentFooter from "../../components/Client/CourseContentFooter/CourseContentFooter";
import { getProduct } from "../../redux/actions/productActions";

function Course(props) {
  const courseId = props.match.params._id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(courseId));
  }, [dispatch, courseId]);

  return (
    <div>
      <CourseContent courseId={courseId} />
      <CourseContentFooter />
    </div>
  );
}

export default withRouter(Course);
