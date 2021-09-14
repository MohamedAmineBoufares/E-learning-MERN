import React, { useEffect, useState } from "react";
import "./PriveiwVideoPopUp.css";

import { useSelector, useDispatch } from "react-redux";

function PreviewVideoPopUp({ videoSrc, show }) {
  const { oneProd } = useSelector((state) => state.products);

  const [videoURL, setURL] = useState("");

  useEffect(() => {
    setURL(oneProd.previewUrl);
    console.log("hi", videoURL);
  }, [videoSrc]);
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
          <div class="modal-header border-0 d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
              aria-label="Close"
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <video className="col-sm-12 " controls>
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewVideoPopUp;
