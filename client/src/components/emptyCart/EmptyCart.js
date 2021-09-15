import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../assets/CartIcon.svg";

import "./EmptyCart.css";

function EmptyCart() {
  return (
    <div class="row justify-content-center">
      <div class="container">
        <div class="card empty__cart__container">
          <div class="card-body">
            <div class="col-sm-12 text-center">
              <img
                src={CartIcon}
                width="200"
                class="img-fluid"
                alt="cart logo"
              />
              <h2 className="mb-3">Your Cart is Empty</h2>
              <h4>I'm hungry, please Feed me 😋</h4>{" "}
              <Link to="/feed" class="btn btn-primary mt-4">
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
