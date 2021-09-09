import React from "react";
import "./App.css";
import Header from "./user/header/Header";
import Welcome from "../pages/user/welcome/Welcome";
import Courses from "../pages/user/courses/Courses";
import AllCourses from "../pages/user/allCourses/AllCourses";

// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Header from "./Header";
// import Home from "./Home";
// import Signup from "./Signup/Signup";
// import Login from "./Login/Login";
// import UserDashboard from "./UserDashboard";
// import AdminDashboard from "./AdminDashboard";
// import AdminEditProduct from "./AdminEditProduct";
// import UserRoute from "./UserRoute";
// import AdminRoute from "./AdminRoute";
// import NotFound from "./NotFound";
// import CoursePriview from "../pages/Client/CoursePriview";
// import CourseVideo from "../pages/Client/CourseVideo";
// import Course from "../pages/Client/Course";
// import Cart from "../pages/Client/Cart";

const App = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Courses />
      <AllCourses/>
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
