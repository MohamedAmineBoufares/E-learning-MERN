import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ courseName, courseDesc, courseID, courseSrc }) {
  return (
    <div className="col mb-5">
      <div class="card">
        <img
          class="card-img-top"
          src={`/uploads/${courseSrc}`}
          alt="Card cap"
        />
        <div class="card-body col-sm-12 card__infos">
          <h2 class="card-title card__infos__course__title">{courseName}</h2>
          <p class="card-text card__infos__course__description text-truncate">
            {courseDesc}
          </p>
          <Link className="btn button__lets__resume" to={`/course/video/${courseID}`}>Let's learn</Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
