import React, { useState } from "react";
import "./PaymentPopUp.css";

function PaymentPopUp() {
  const [send, setSend] = useState(false);

  const sendData = () => {
    setSend(!send);
  };

  return (
    <div
      class="modal fade"
      id="paymentPopUp"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body">
            {send ? (
              <div className="container">
                <h3>Dear UsermName,</h3>
                <p>
                  In order to buy this course, all you need to do is to{" "}
                  <strong>
                    visit the neareast the post office to your house
                  </strong>{" "}
                  and send money to this account number{" "}
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
