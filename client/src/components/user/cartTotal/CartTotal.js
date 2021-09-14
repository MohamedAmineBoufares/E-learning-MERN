import React from "react";

function CartTotal() {
  return (
    <div className="col">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Total</h2>
          <h4 class="card-description">here the total price</h4>
        </div>

        <div className="card-footer d-flex justify-content-end align-items-center">
          <button class="btn btn-primary d-flex justify-content-center align-items-center">
            <i class="fa fa-shopping-cart fa-lg mr-2" aria-hidden="true"></i>
            Chekout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
