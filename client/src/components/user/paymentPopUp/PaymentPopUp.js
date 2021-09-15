import React, { useEffect, useState } from "react";
import "./PaymentPopUp.css";
import { getLocalStorage } from "../../../helpers/localStorage";
import { isAuthenticated } from "../../../helpers/auth";

// Redux 

import { useSelector, useDispatch } from "react-redux";
import { sendCartToDB } from "../../../redux/actions/cartActions";


function PaymentPopUp({ total }) {

// Redux states
const { loading } = useSelector((state) => state.loading);
const items = useSelector((state) => state.cart.items);

  const [send, setSend] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (isAuthenticated()) {
      setUserName(getLocalStorage("user").username);
    }
  },[setUserName]);

  const sendData = () => {
    setSend(true);
  };

  return (
    <div
      className="modal fade"
      id="paymentPopUp"
      tabindex="-1"
      role="dialog"
      aria-labelledby="paymentPopUp"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body">
            {send ? (
              <div className="container">
                <h3>Dear {userName},</h3>
                <p>
                  In order to buy this course, all you need to do is to{" "}
                  <strong>
                    visit the neareast the post office to your house
                  </strong>{" "}
                  and send money,{" "}
                  <strong style={{ color: "red" }}>{total + " DT"}</strong>, to
                  this account number{" "}
                  <span style={{ color: "#F38E0D" }}>“ 123456789217 “</span> .
                  <br /> After doing that, all you need to do is writing the
                  transaction number in this box here :
                </p>

                <form className="d-flex justify-content-center align-items-center">
                  <div class="form-group">
                    <input
                      type="file"
                      class="form-control-file is-invalid"
                      id="exampleFormControlFile1"
                      required
                    />
                    <div class="invalid-feedback">You must upload a file</div>
                  </div>
                </form>
              </div>
            ) : (
              <div className="container text-center">
                <p>
                  All you need to do now is to wait the admin’s approvel, this
                  may take a while <i>( at most 48h )</i>.
                </p>
              </div>
            )}
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn"
              data-dismiss="modal"
              onClick={sendData}
            >
              Close
            </button>
            {send && (
              <button
                type="button"
                class="btn payment__pop__up__validate__btn jus"
                onClick={sendData}
              >
                Validate
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPopUp;
