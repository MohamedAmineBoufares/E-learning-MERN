import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

const UserRoute = ({ component: Component, ...rest }) => {
  const authorised = useSelector((state) => state.courses.authorised);
  
  useEffect(() => {
    console.log("AHAWA !", authorised);
  }, []);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().role === 0  ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};
export default UserRoute;
