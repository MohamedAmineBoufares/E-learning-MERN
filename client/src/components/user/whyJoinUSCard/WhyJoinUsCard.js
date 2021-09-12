import React from "react";
import "./WhyJoinUsCard.css";

function WhyJoinUsCard({ src }) {
  return (
    <div className="col mb-5">
      <div class="card">
        <img
          class="card-img-top"
          src="https://icon-library.com/images/play-video-icon-png-transparent/play-video-icon-png-transparent-14.jpg"
          alt="Card cap"
        />
        <div class="card-body text-center">
          <h5 class="card-title">LEARN BY DOING </h5>
          <p class="card-text">
            Create projects you'll be proud to share. Courses include incentives
            and resources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyJoinUsCard;
