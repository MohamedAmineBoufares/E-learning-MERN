import React from "react";
import "./header.css";

function Header() {
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
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                All Courses
              </a>
            </li>

            <li class="nav-item ">
              <a class="nav-link" href="./aboutus.html">
                <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
                <span className="ml-3 d-inline d-sm-none">Favorites</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                <span className="ml-3 d-inline d-sm-none">Cart</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./contactus.html">
                <i class="fa fa-bell fa-lg" aria-hidden="true"></i>
                <span className="ml-3 d-inline d-sm-none">Notification</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./contactus.html">
                <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>
                <span className="ml-3 d-inline d-sm-none">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
