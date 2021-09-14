import React, { useEffect } from "react";
import "./App.css";
import Header from "./user/header/Header";

// import AdminDashboard from "./AdminDashboard";
// import AdminEditProduct from "./AdminEditProduct";
// import UserRoute from "./UserRoute";
// import AdminRoute from "./AdminRoute";
// import NotFound from "./NotFound";

// import Cart from "../pages/Client/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseInfos from "../pages/user/courseInfos/CourseInfos";
import Feed from "../pages/user/feed/Feed";
import PreviewVideoPopUp from "./user/previewVideoPopUp/PreviewVideoPopUp";
import PaymentPopUp from "./user/paymentPopUp/PaymentPopUp";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/categoryActions";
import { getProducts } from "../redux/actions/productActions";
import { isAuthenticated } from "../helpers/auth";

import { showErrorMsg, showSuccessMsg } from "../helpers/message";

const App = () => {
  const dispatch = useDispatch();

  const oneCourse = useSelector((state) => state.products.oneProd);

  if (isAuthenticated()) {
    console.log("Seleeeeeeeeeeem");
  }

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

          {/* Feed */}

          <Route path="/">
            <Header />
            <Feed />
          </Route>
        </Switch>
      </Router>

      {/* Pop-ups */}
      {/* {oneCourse && <PreviewVideoPopUp videoSrc={oneCourse.previewUrl} />} */}

      <PaymentPopUp />
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
