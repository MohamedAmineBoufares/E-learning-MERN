import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "../helpers/auth";

const Header = ({ history }) => {
       const handleLogout = (evt) => {
              logout(() => {
                     history.push("/signin");
              });
       };

       //views
       const showNavigation = () => (
              <nav className='navbar navbar-expand-lg navbar-light bg-light  '>
                     <div className='container-fluid'>
                            Logo
                            <li className='nav-item'>
                                   <i className='fas fa-user-circle'></i> Welcome
                            </li>
                            <button
                                   className='navbar-toggler'
                                   type='button'
                                   data-bs-toggle='collapse'
                                   data-bs-target='#navbarTogglerDemo02'
                                   aria-controls='navbarTogglerDemo02'
                                   aria-expanded='false'
                                   aria-label='Toggle navigation'
                            >
                                   <span className='navbar-toggler-icon'></span>
                            </button>
                            <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                                   <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                                          {!isAuthenticated() && (
                                                 <Fragment>
                                                        <li className='nav-item'>
                                                               <Link to='/' className='nav-link' aria-current='page'>
                                                                      <i className='fas fa-home'></i> Home
                                                               </Link>
                                                        </li>
                                                        <li className='nav-item'>
                                                               <Link to='/signup' className='nav-link' aria-current='page'>
                                                                      <i className='fas fa-edit'></i> Signup
                                                               </Link>
                                                        </li>
                                                        <li className='nav-item'>
                                                               <Link to='/signin' className='nav-link'>
                                                                      <i className='fas fa-sign-in-alt'></i> Signin
                                                               </Link>
                                                        </li>
                                                 </Fragment>
                                          )}

                                          {isAuthenticated() && isAuthenticated().role === 0 && (
                                                 <Fragment>
                                                        {/* dropDown for categories user dash */}
                                                        <div class="dropdown">
                                                               <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                      Categories
                                                               </button>
                                                               <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                      <a className="dropdown-item" href="#">Action</a>
                                                                      <a className="dropdown-item" href="#">Another action</a>
                                                                      <a className="dropdown-item" href="#">Something else here</a>
                                                               </div>
                                                        </div>

                                                        <li className='nav-item'>
                                                               <Link to='#' className='nav-link'>
                                                                      <i className='fas fa-search'></i>
                                                               </Link>

                                                               {/* <Link to='/user/dashboard' className='nav-link'>
                                                                      
                                                                      <i className='fas fa-home'></i> Dashboard
                                                               </Link> */}
                                                        </li>
                                                        <li className='nav-item'>
                                                               <Link to='#' className='nav-link' aria-current='page'>
                                                                      <i className='fas fa-shopping-cart fa-1x'></i>
                                                               </Link>
                                                        </li>
                                                        <li className='nav-item'>
                                                               <Link to='#' className='nav-link' aria-current='page'>
                                                                      <i className='far fa-heart '></i> 
                                                               </Link>
                                                        </li>
                                                 </Fragment>
                                          )}

                                          {isAuthenticated() && isAuthenticated().role === 1 && (
                                                 <Fragment>
                                                        <li className='nav-item'>
                                                               <Link to='/admin/dashboard' className='nav-link' aria-current='page'>
                                                                      <i className='fas fa-home'></i> Dashboard
                                                               </Link>
                                                        </li>
                                                 </Fragment>
                                          )}

                                          {isAuthenticated() && (
                                                 <Fragment>
                                                        <li className='nav-item'>
                                                               <button
                                                                      className='btn btn-link text-secondary text-decoration-none pl-0'
                                                                      onClick={handleLogout}
                                                               >
                                                                      <i className='fas fa-sign-out-alt'></i> Logout
                                                               </button>
                                                        </li>
                                                 </Fragment>
                                          )}
                                   </ul>
                            </div>
                     </div>
              </nav>
       );
       //render
       return <header id='header'>{showNavigation()}</header>;
};

export default withRouter(Header);