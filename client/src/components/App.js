import React, { useEffect } from "react";
import "./App.css";

// Components

import Header from "./user/header/Header";

// import AdminDashboard from "./AdminDashboard";
// import AdminEditProduct from "./AdminEditProduct";
// import NotFound from "./NotFound";

// Pages

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseInfos from "../pages/user/courseInfos/CourseInfos";
import Feed from "../pages/user/feed/Feed";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Cart from "../pages/user/cart/Cart";

// Routes
import UserRoute from "./user/UserRoute";
import AdminRoute from "./admin/AdminRoute";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/categoryActions";
import { getProducts } from "../redux/actions/productActions";

import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import AdminDashboard from "./admin/AdminDashboard";
import CourseVideo from "../pages/user/courseVideo/CourseVideo";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Switch>
          {/* Log-in */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Sign-up */}
          <Route path="/signup">
            <Signup />
          </Route>

          {/* Course infos */}

          <Route path="/courseInfos/:_id">
            <Header />
            <CourseInfos />
          </Route>

          {/* Cart */}

          <UserRoute exact path="/cart" component={Cart} />

          {/* Course Video */}

          <UserRoute exact path="/course/video/:courseID" component={CourseVideo} />

          {/* Admin Dashboard */}

          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />

          {/* Feed */}

          <Route path="/">
            <Header />
            <Feed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

// <BrowserRouter>
//   <Header />

//   <main>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/signup" component={Signup} />
//       <Route exact path="/signin" component={Login} />
//       <UserRoute exact path="/user/dashboard" component={UserDashboard} />
//       <AdminRoute
//         exact
//         path="/admin/dashboard"
//         component={AdminDashboard}
//       />

//       <AdminRoute
//         exact
//         path="/admin/edit/product/:productId"
//         component={AdminEditProduct}
//       />

//       {/* Course Video */}
//       {<UserRoute path="/course_video/:courseID" component={CourseVideo} />}

//       {/* <Route path="/course_video/:courseID">
//         { (
//           <div className="App">
//             <CourseVideo />
//           </div>
//         )}
//       </Route> */}

//       {/* Video Privew */}
//       <Route path="/video_preview">
//         <div className="App">
//           <CoursePriview />
//         </div>
//       </Route>

//       {/* Course Content */}
//       <Route path="/course_content/:_id">
//         <div className="App">
//           <Course />
//         </div>
//       </Route>

//       {/* Cart */}
//       <Route path="/cart">
//         <div className="App">
//           <Cart />
//         </div>
//       </Route>

//       <Route component={NotFound} />
//     </Switch>
//   </main>
// </BrowserRouter>
