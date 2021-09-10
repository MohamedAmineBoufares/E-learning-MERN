import React from "react";
import RecommendedCard from "../../../components/user/RecommendedCard/RecommendedCard";

function Recommended() {
  return (
    <div class="col mt-5">
      <div class="row">
        <div class="col-sm-12">
          <h1 className="lets__start mb-5">Topics recommended for you</h1>
        </div>
      </div>

      <div class="row justify-content-sm-center">
        <div class="container">
          <div className="row justify-content-sm-start row-cols-sm-4">
              <RecommendedCard/>
              <RecommendedCard/>
              <RecommendedCard/>
              <RecommendedCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
