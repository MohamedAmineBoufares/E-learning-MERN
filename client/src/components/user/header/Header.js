import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-light navbar-expand-sm fixed-top">
        <div class="container">
          <a class="navbar-brand col-3" href="./Header.js">
            Logo
          </a>

          <form className="form-inline col-6">
            <div className="form-group has-search">
              <input type="text" class="form-control" placeholder="Search" />
              <span className="fa fa-search form-control-feedback"></span>
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

          <div class="collapse navbar-collapse" id="Navbar">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  All Courses
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="./aboutus.html">
                  <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="./contactus.html">
                  <i class="fa fa-bell fa-lg" aria-hidden="true"></i>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="./contactus.html">
                  <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
