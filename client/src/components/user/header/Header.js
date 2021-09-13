import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./header.css";

import { logout } from "../../../helpers/auth";

import { isAuthenticated } from "../../../helpers/auth";

function Header() {
  const [test, setTest] = useState(false);
  const history = useHistory();

  const logOut = () => {
    logout(() => {
      auth.signOut();
    });

    setTest(!test);
  };

  return (
    <nav class="navbar navbar-light navbar-expand-sm fixed-top ">
      <div class="container col-sm-12">
        <a class="navbar-brand col-auto col-lg-3" href="./Header.js">
          Logo
        </a>

        <form className="form-inline justify-content-sm-center col-auto col-lg-6">
          <div className="form-group has-search">
            <input type="text" class="form-control" placeholder="Search" />
          </div>
        </form>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#Navbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse col-lg-3 col-auto justify-content-sm-center"
          id="Navbar"
        >
          <a class="nav-link" href="#">
            All Courses
          </a>

          {isAuthenticated() && isAuthenticated().role === 0 ? (
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link" href="./aboutus.html">
                  <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
                  <span className="ml-3 d-inline d-sm-none">Favorites</span>
                  <span className="rounded-circle pr-1 pl-1 items__dot">1</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                  <span className="ml-3 d-inline d-sm-none mr-2">Cart</span>
                  <span className="rounded-circle pr-1 pl-1 items__dot">1</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="./contactus.html">
                  <i class="fa fa-bell fa-lg" aria-hidden="true"></i>
                  <span className="ml-3 d-inline d-sm-none">Notification</span>
                </a>
              </li>

              <div className="dropdown">
                <button
                  class="nav-link btn dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>
                  <span className="ml-3 d-inline d-sm-none">Profile</span>
                </button>

                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <button
                    class="dropdown-item d-flex align-items-center"
                    onClick={logOut}
                  >
                    <i class="fas fa-sign-out-alt mr-2"></i> Log out
                  </button>
                </div>
              </div>
            </ul>
          ) : (
            <div className="col">
              <Link to="/login">
                <button className="btn btn-primary">Log-in</button>
              </Link>
              <Link to="/signup">
                <button className="btn">Sign-up</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
