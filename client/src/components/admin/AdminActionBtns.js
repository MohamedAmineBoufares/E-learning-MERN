import React from "react";

const AdminActionBtns = () => (
  <div className="col mb-4">
    <div className="container">
      <div className="row" pb-3>
        <div className="col-sm-4">
          <button
            className="btn btn-outline-secondary btn-block mb-4"
            data-toggle="modal"
            data-target="#viewOrdersModal"
          >
            <i className="fas fa-money-check-alt"> View Orders</i>
          </button>
        </div>
        <div className="col-sm-4 mb-4">
          <button
            className="btn btn-outline-info btn-block"
            data-toggle="modal"
            data-target="#addCategoryModal"
          >
            <i className="fas fa-plus"> Add Category</i>
          </button>
        </div>

        <div className="col-sm-4">
          <button
            className="btn btn-outline-primary btn-block"
            data-toggle="modal"
            data-target="#addCourseModal"
          >
            <i className="fas fa-plus"> Add Course</i>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AdminActionBtns;
