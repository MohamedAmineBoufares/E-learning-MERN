import React, { useState } from "react";
import PreviewVideoPopUp from "../previewVideoPopUp/PreviewVideoPopUp";
import "./CourseInfosCard.css";

function CourseInfosCard({ coursePrice, videoSrc, coursePIC }) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(true);
    console.log(isOpen)
  };
  return (
    <div className="col mb-5">
      <div class="card">
        <img
          class="card-img-top"
          src={coursePIC}
          alt="Card cap"
        />
        <div class="card-body course__infos__card__container">
          <h2 class="card-title">{coursePrice} DT</h2>
          <div className="d-flex flex-column">
            <button
              class="btn mb-3 course__infos__card__buy__now"
              data-toggle="modal"
              data-target="#paymentPopUp"
            >
              <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
              Buy now
            </button>

            <button
              class="btn mb-3 course__infos__watch__preview"
              data-toggle="modal"
              data-target="#previewVideoModal"
              onClick={togglePopup}
            >
              <i class="fa fa-play mr-2" aria-hidden="true" ></i>
              Watch preview
            </button>
          </div>

          <div className="container">
            <h4>This Course Includes :</h4>

            <ul className="card__infos__card__list">
              <li className="mb-3">
                <i class="fa fa-desktop mr-2" aria-hidden="true"></i>
                nbOfHours of on demand videos
              </li>

              <li className="mb-3">
                <i class="fas fa-infinity mr-2"></i>
                Full time life accesss
              </li>

              <li className="mb-3">
                <i class="fa fa-mobile mr-2" aria-hidden="true"></i>
                Access on mobile and TV
              </li>

              <li>
                <i class="fa fa-certificate mr-2" aria-hidden="true"></i>
                Certificate of accomplishment
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <PreviewVideoPopUp videoSrc={videoSrc}/>
      )}
    </div>
  );
}

export default CourseInfosCard;
