import React from "react";
import "./FavCard.css";

import { isAuthenticated } from "../../../helpers/auth";
import { getLocalStorage } from "../../../helpers/localStorage";
import { useDispatch } from "react-redux";
import { removeFromFavList } from "../../../redux/actions/favoriteActions";
import { addToCart } from "../../../redux/actions/cartActions";

function FavCard({
  fileName,
  productName,
  productPrice,
  videoUrl,
  previewUrl,
  productDesc,
  productCategory,
  productID,
  _id,
}) {
  const dispatch = useDispatch();

  const remove = (e) => {
    e.preventDefault();
    if (isAuthenticated()) {
      const userID = getLocalStorage("user")._id;
      dispatch(removeFromFavList(userID, productID));
    }
  };

  const addCart = (e) => {
    const item = {
      fileName,
      productName,
      productPrice,
      videoUrl,
      previewUrl,
      productDesc,
      productCategory,
      _id,
    };

    // Sending the course to store
    if (isAuthenticated()) {
      const userID = getLocalStorage("user")._id;
      dispatch(addToCart(item, userID));
      remove(e);
    }
  };

  return (
    <div class="card-body align-items-center" style={{ width: "18rem" }}>
      <div className=" row d-flex justify-content-start align-items-center mb-2">
        <div className="col-4">
          <img
            class="card-img-top mr-2"
            src={fileName}
            alt="Card cap"
            style={{ width: "5rem" }}
          />
        </div>
        <div className="col-5">
          <h5 class="card-title">{productName}</h5>
        </div>

        <div className="col-2" onClick={addCart}>
          <button className="btn btn-primary mb-2" title="add course to cart">
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
          <button
            className="btn"
            title="remove from whishlist"
            onClick={remove}
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavCard;
