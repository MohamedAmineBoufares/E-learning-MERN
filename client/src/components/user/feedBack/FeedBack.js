import React from "react";
import FeedBackCard from "../feedBackCard/FeedBackCard";
import "./FeedBack.css";

function FeedBack() {
  return (
    <div class="col mt-5 feed__back__container">
      <div className="container feed__back__container__cards">
        <div className="row row-cols-1 row-cols-sm-3 ">
          <FeedBackCard />
          <FeedBackCard />
          <FeedBackCard />
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
