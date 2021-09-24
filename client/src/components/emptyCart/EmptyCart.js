import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../assets/CartIcon.svg";

import "./EmptyCart.css";

function EmptyCart() {
  return (
    <div className="row justify-content-center">
      <div className="container">
        <div className="card empty__cart__container">
          <div className="card-body">
            <div className="col-sm-12 text-center">
              <img
                src={CartIcon}
                width="200"
                className="img-fluid"
                alt="cart logo"
              />
              <h2 classNameName="mb-3">Your Cart is Empty</h2>
              <h4>I'm hungry, please Feed me 😋</h4>{" "}
              <Link to="/feed" className="btn btn-primary mt-4">
                Feed her !
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
