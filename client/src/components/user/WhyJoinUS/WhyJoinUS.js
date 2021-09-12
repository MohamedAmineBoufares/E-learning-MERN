import React from "react";
import WhyJoinUsCard from "../whyJoinUSCard/WhyJoinUsCard";
import "./WhyJoinUS.css";

function WhyJoinUS() {
  return (
    <div class="col mt-5 why__join__us__container">
      <div class="row">
        <div class="col-sm-12 d-flex justify-content-center">
          <h1 className="lets__start mb-5">WHY join GHS Academy ?</h1>
        </div>
      </div>

      <div class="row justify-content-sm-center">
        <div class="container">
          <div className="row justify-content-sm-center row-cols-1 row-cols-sm-3">
            <WhyJoinUsCard />
            <WhyJoinUsCard />
            <WhyJoinUsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyJoinUS;
