import React, { useEffect } from "react";
import CourseInfosBody from "../../../components/user/CourseInfosBody/CourseInfosBody";

import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { getProduct } from "../../../redux/actions/productActions";

function CourseInfos(props) {
  const courseID = props.match.params._id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(courseID));
  }, [dispatch, courseID]);

  return (
    <div>
      <CourseInfosBody courseID={courseID}/>
    </div>
  );
}

export default withRouter(CourseInfos);
