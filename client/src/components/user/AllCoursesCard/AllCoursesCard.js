import React, { useEffect, useState } from "react";
import "./AllCoursesCard.css";

import { Link } from "react-router-dom";

import { getLocalStorage } from "../../../helpers/localStorage";

// REDUX !
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";
import { addToFavorite } from "../../../redux/actions/favoriteActions";
import { isAuthenticated } from "../../../helpers/auth";

function AllCoursesCard({ product }) {
  const dispatch = useDispatch();

  const [userID, setUserID] = useState();

  // Constes so I can recall them inside an object, later
  const productName = product.productName;
  const fileName = product.fileName;
  const productPrice = product.productPrice;
  const videoUrl = product.videoUrl;
  const previewUrl = product.previewUrl;
  const productDesc = product.productDesc;
  const productCategory = product.productCategory.category;
  const _id = product._id;

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 0) {
      setUserID(getLocalStorage("user")._id);
    }
  }, []);

  const addCart = () => {
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
    dispatch(addToCart(item, userID));
  };

  const addFav = () => {
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
    dispatch(addToFavorite(item, userID));
  };

  return (
    <div className="col mb-5 col-sm-12">
      <div class="card card__all__courses__container">
        <img
          class="card-img-top"
          src={fileName}
          alt={product.productName}
          title={product.productName}
          height="200"
        />
        <div class="card-body">
          <h4 className="card-text">{product.productPrice} DT</h4>

          <h2 class="card-title">{product.productName}</h2>

          {/* <p class="card-text d-flex justify-content-around w-50">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </p> */}
          <div className="d-flex justify-content-between mb-2">
            <button
              className="btn d-flex align-items-center buy__this"
              onClick={addCart}
            >
              <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i>
              Buy/Add this course
            </button>

            <Link
              to={`/courseInfos/${_id}`}
              className="btn d-flex align-items-center see__more"
            >
              See more
            </Link>
          </div>

          <button className="btn d-flex align-items-center" onClick={addFav}>
            <i class="fa fa-heart mr-2" aria-hidden="true"></i>Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllCoursesCard;
