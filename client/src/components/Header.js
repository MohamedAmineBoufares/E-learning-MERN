import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "../helpers/auth";
import { useSelector } from "react-redux";
import { getCategories } from "../api/category";
import { auth } from "../components/firebase";

const Header = ({ history }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorite.items);
  const handleLogout = (evt) => {
    logout(() => {
      auth.signOut();

      history.push("/signin");
    });
  };

  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ************LIFECYCLE METHOD (for getting gategories)************** */
  useEffect(() => {
    loadCategories();
  }, [loading]);

  const loadCategories = async () => {
    await getCategories()
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //views
  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
      <div className="container-fluid">
        Logo
        <li className="nav-item">
          <i className="fas fa-user-circle"></i> Welcome
        </li>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">
                    <i className="fas fa-home"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link" aria-current="page">
                    <i className="fas fa-edit"></i> Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                    <i className="fas fa-sign-in-alt"></i> Login
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().role === 0 && (
              <Fragment>

                <div className="form-row">
                  <select
                    className="custom-select mr-sm-2"
                    name="productCategory"
                  >
                    <option value="">categories</option>
                    {categories &&
                      categories.map((c) => (
                        <option key={c._id} value={c._id}>
                          {c.category}
                        </option>
                      ))}
                  </select>
                </div>

                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fas fa-search"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link" aria-current="page">
                    <i className="fas fa-shopping-cart position-relative">
                      <span
                        className="position-absolute"
                        style={{
                          padding: "3px 6px",
                          background: "#ed143dc2",
                          borderRadius: "50%",
                          top: "-10px",
                          right: "-10px",
                          color: "white",
                          fontSize: "12px",
                        }}
                      >
                        {cartItems && cartItems.length}
                      </span>
                    </i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link" aria-current="page">
                    <i className="fas fa-heart position-relative">
                      <span
                        className="position-absolute"
                        style={{
                          padding: "3px 6px",
                          background: "#ed143dc2",
                          borderRadius: "50%",
                          top: "-10px",
                          right: "-10px",
                          color: "white",
                          fontSize: "12px",
                        }}
                      >
                        {favoriteItems && favoriteItems.length}
                      </span>
                    </i>
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().role === 1 && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/admin/dashboard"
                    className="nav-link"
                    aria-current="page"
                  >
                    <i className="fas fa-home"></i> Dashboard
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <button
                    className="btn btn-link text-secondary text-decoration-none pl-0"
                    onClick={handleLogout}
                  >
                    <i className="fas fa-sign-out-alt"></i> Logout
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
  return <header id="header">{showNavigation()}</header>;
};

export default withRouter(Header);
