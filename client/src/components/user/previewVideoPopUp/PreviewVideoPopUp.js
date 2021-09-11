import React from "react";
import "./PriveiwVideoPopUp.css";

function PreviewVideoPopUp() {
  return (
    <div
      class="modal fade"
      id="previewVideoModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content preview__video__modal__video">
          <div class="modal-body">
            <video className="col-sm-12 " controls>
              <source src="movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewVideoPopUp;
