import React from "react";

import { getLocalStorage } from "../../../helpers/localStorage";
import { isAuthenticated } from "../../../helpers/auth";

// Redux
import { removeFromCart } from "../../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

function CartItem({ fileName, productName, productPrice, _id, productID }) {
  const dispatch = useDispatch();

  const remove = () => {
    if (isAuthenticated()) {
      const userID = getLocalStorage("user")._id;
      dispatch(removeFromCart(userID, productID));
    }
  };

  return (
    <div className="col">
      <div class="card mb-3">
        <div class="card-body">
          <div className="row align-items-sm-center">
            <div className="col-sm-3 d-flex justify-content-center">
              <img
                width="200"
                src={fileName}
                alt="course cover"
              />
            </div>
            <div className="col-sm-6 d-flex flex-column align-items-center d-sm-block">
              <h4 class="card-title mt-3">{productName}</h4>
              <strong class="card-text mt-2">{productPrice} DT</strong>
            </div>

            <div class="col-sm-3 d-flex justify-content-sm-end align-items-center justify-content-center mt-3">
              <button
                type="button"
                class="btn btn-danger d-flex justify-content-center align-items-center"
                onClick={remove}
              >
                <i class="fa fa-trash mr-2" aria-hidden="true"></i>
                delete item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
