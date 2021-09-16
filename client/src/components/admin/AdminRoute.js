import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";
import Header from "../user/header/Header";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().role === 1 ? (
          <div>
            <Header/>
            <Component {...props}/>
          </div>
          
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};
export default AdminRoute;
