import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";
import { useSelector } from "react-redux";
import { useState } from "react";

function CourseRoute({ component: Component, ...rest }) {
  const courses = useSelector((state) => state.courses.courses);

  const [ahawa, setAhawa] = useState(false);
  const ID = "61153662ba1b5826b0f164ae";

  const findCourse = (id = ID) => {
    console.log("VOILAA3");

    courses.map(({ course }) => {
      const found = course.find(({ courseID }) => courseID === id);

      setAhawa(true);

      console.log(ahawa);

      return found;
    });
  };

  useEffect(() => {
    findCourse();
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().role === 0 && ahawa ?  (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default CourseRoute;
