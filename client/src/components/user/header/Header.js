import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./header.css";

import { logout } from "../../../helpers/auth";

import { isAuthenticated } from "../../../helpers/auth";

import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorite.items);

  const logOut = () => {
    logout(() => {
      auth.signOut();
    });

    window.location.reload();
  };

  return (
    <nav class="navbar navbar-light navbar-expand-sm fixed-top ">
      <div class="container col-sm-12">
        <a class="navbar-brand col-auto col-sm-2" href="./Header.js">
          Logo
        </a>

        <form className="form-inline justify-content-sm-center col-sm-4">
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
          class="collapse navbar-collapse col-sm-3 justify-content-sm-center"
          id="Navbar"
        >
          {isAuthenticated().role === 0 && (
            <a class="nav-link col-sm-5" href="#">
              All Courses
            </a>
          )}

          {isAuthenticated() ? (
            <ul class="navbar-nav">
              {isAuthenticated().role === 0 && (
                <li class="nav-item ">
                  <div class="nav-link">
                    <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
                    <span className="ml-3 d-inline d-sm-none mr-2">
                      Favorites
                    </span>
                    <span className="rounded-circle pr-1 pl-1 items__dot">
                      {favoriteItems && favoriteItems.length}
                    </span>
                  </div>
                </li>
              )}
              {isAuthenticated().role === 0 && (
                <li class="nav-item">
                  <Link class="nav-link" to="/cart">
                    <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                    <span className="ml-3 d-inline d-sm-none mr-2">Cart</span>
                    <span className="rounded-circle pr-1 pl-1 items__dot">
                      {cartItems && cartItems.length}
                    </span>
                  </Link>
                </li>
              )}

              {isAuthenticated().role === 0 && (
                <li class="nav-item">
                  <div className="nav-link">
                    <i class="fa fa-bell fa-lg" aria-hidden="true"></i>
                    <span className="ml-3 d-inline d-sm-none">
                      Notification
                    </span>
                  </div>
                </li>
              )}

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

                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
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
            <ul class="navbar-nav col-sm-12">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <button className="btn btn-primary">Log-in</button>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  <button className="btn">Sign-up</button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
