import React from "react";
import "./RecommendedCard.css";

function RecommendedCard() {
  return (
    <div className="col mb-5 recommender__card__container">
      <div class="card recommender__card__container">
        <img
          class="card-img-top"
          src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          alt="Card cap"
        />
        <div class="card-body col-sm-12 d-flex justify-content-center align-items-center text-center">
          <h3 class="card-title">JavaScript ES6</h3>
        </div>
      </div>
    </div>
  );
}

export default RecommendedCard;
