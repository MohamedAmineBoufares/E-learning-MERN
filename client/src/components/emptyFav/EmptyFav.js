import React from "react";

import BrokenHeart from "../assets/broken-heart.svg";

function EmptyFav() {
  return (
    <div className="col">
      <div className="container justify-content-center">
        <img src={BrokenHeart} width="30" alt="Broken Heart" text="Broken Heart" className="mb-2"/>
        <p className="text-center">You have nothing in your wishlist</p>
      </div>
    </div>
  );
}

export default EmptyFav;
