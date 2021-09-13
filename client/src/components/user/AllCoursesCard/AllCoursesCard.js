import React from "react";
import "./AllCoursesCard.css";

import { Link } from "react-router-dom";

function AllCoursesCard({ product }) {
  
  // Constes so I can recall them inside an object, later
  const productName = product.productName;
  const fileName = product.fileName;
  const productPrice = product.productPrice;
  const videoUrl = product.videoUrl;
  const previewUrl = product.previewUrl;
  const _id = product._id;

  return (
    <div className="col mb-5">
      <div class="card">
        <img
          class="card-img-top"
          src={`/server/uploads/${product.fileName}`}
          alt={product.productName}
          title={product.productName}
        />
        <div class="card-body col-sm-12">
          <h4 className="card-text">{product.productPrice} DT</h4>
          <h2 class="card-title">{product.productName}</h2>
          <p class="card-text d-flex justify-content-around w-50">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </p>
          <div className="d-flex justify-content-between mb-2">
            <button className="btn d-flex align-items-center buy__this">
              <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>Buy
              this course
            </button>

            <Link
              to="/courseInfos"
              className="btn d-flex align-items-center see__more"
            >
              See more
            </Link>
          </div>

          <button className="btn d-flex align-items-center">
            <i class="fa fa-heart mr-2" aria-hidden="true"></i>Add to favorites
          </button>
          <button
            className="btn d-flex align-items-center mb-2"
            data-toggle="modal"
            data-target="#previewVideoModal"
          >
            <i class="fa fa-play mr-2" aria-hidden="true"></i>Watch preview
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllCoursesCard;
