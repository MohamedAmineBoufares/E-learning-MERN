import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./header.css";

import { logout } from "../../../helpers/auth";

import { isAuthenticated } from "../../../helpers/auth";

import { useSelector } from "react-redux";

import logoBlue from "../../assets/logo_blue.png";

import FavCard from "../favCard/FavCard";
import EmptyFav from "../../emptyFav/EmptyFav";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorite.items);
  const allCourses = useSelector((state) => state.products.products);

  const [filtredProduct, setFiltredProducts] = useState([]);

  useEffect(() => {
    setFiltredProducts(allCourses);
  }, [allCourses]);

  const logOut = () => {
    logout(() => {
      auth.signOut();
    });

    window.location.reload();
  };

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [allCourses];

    result = allCourses.filter((data) => {
      return data.productName.toLowerCase().search(value) !== -1;
    });

    setFiltredProducts(result);
  };

  return (
    <nav class="navbar navbar-light navbar-expand-sm fixed-top">
      <div class="container col-sm-12">
        <div class="navbar-brand">
          <img alt="plateform logo" src={logoBlue} width="80" />
        </div>

        <div className="dropdown form-group">
          <input
            className="form-control"
            type="text"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            placeholder="Search course"
            onChange={(e) => handleSearch(e)}
          ></input>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {filtredProduct.map(({ productName, _id }) => (
              <Link className="dropdown-item" to={`/courseInfos/${_id}`}>
                {productName}
              </Link>
            ))}
          </div>
        </div>

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
            <Link to="/feed" class="nav-link col-sm-5">
              All Courses
            </Link>
          )}

          {isAuthenticated() ? (
            <ul class="navbar-nav">
              {isAuthenticated().role === 0 && (
                <div class="dropdown">
                  <button
                    class="nav-link btn"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
                    <span className="ml-3 d-inline d-sm-none mr-2">
                      Favorites
                    </span>
                    {favoriteItems && favoriteItems.length !== 0 && (
                      <span className="rounded-circle pr-1 pl-1 items__dot">
                        {favoriteItems.length}
                      </span>
                    )}
                  </button>

                  <div
                    class="dropdown-menu dropdown-menu-right fav__drop__down"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {favoriteItems.length !== 0 ? (
                      favoriteItems.map(
                        ({
                          fileName,
                          productName,
                          productPrice,
                          videoUrl,
                          previewUrl,
                          productDesc,
                          productCategory,
                          productID,
                          _id,
                        }) => (
                          <FavCard
                            fileName={fileName}
                            productName={productName}
                            productPrice={productPrice}
                            videoUrl={videoUrl}
                            previewUrl={previewUrl}
                            productDesc={productDesc}
                            productCategory={productCategory}
                            productID={productID}
                            _id={_id}
                          />
                        )
                      )
                    ) : (
                      <EmptyFav />
                    )}
                  </div>
                </div>
              )}
              {isAuthenticated().role === 0 && (
                <li class="nav-item ml-2">
                  <Link class="nav-link" to="/cart">
                    <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                    <span className="ml-3 d-inline d-sm-none mr-2">Cart</span>
                    {cartItems && cartItems.length !== 0 && (
                      <span className="rounded-circle pr-1 pl-1 items__dot">
                        {cartItems.length}
                      </span>
                    )}
                  </Link>
                </li>
              )}

              {/* {isAuthenticated().role === 0 && (
                <li class="nav-item">
                  <div className="nav-link">
                    <i class="fa fa-bell fa-lg" aria-hidden="true"></i>
                    <span className="ml-3 d-inline d-sm-none">
                      Notification
                    </span>
                  </div>
                </li>
              )} */}

              <div className="dropdown ml-sm-3">
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
