import React from "react";

function CartItem() {
  return (
    <div className="col">
      <div class="card mb-3">
        <div class="card-body">
          <div className="row align-items-sm-center">
            <div className="col-sm-3 d-flex justify-content-center">
              <img
                width="200"
                src="https://elearningindustry.com/wp-content/uploads/2020/12/how-to-improve-your-elearning-course-cover-design.png"
                alt="course cover"
              />
            </div>
            <div className="col-sm-6 d-flex flex-column align-items-center d-sm-block">
              <h4 class="card-title mt-3">Course Title</h4>
              <p class="card-text mt-2">Course Price DT</p>
            </div>

            <div class="col-sm-3 d-flex justify-content-sm-end align-items-center justify-content-center mt-3">
              <button
                type="button"
                class="btn btn-danger d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-trash mr-2" aria-hidden="true"></i>
                delete item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
