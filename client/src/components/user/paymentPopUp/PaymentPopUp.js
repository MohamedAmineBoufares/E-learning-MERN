import React, { useEffect, useState } from "react";
import "./PaymentPopUp.css";
import { getLocalStorage } from "../../../helpers/localStorage";
import { isAuthenticated } from "../../../helpers/auth";

// Redux

import { useSelector, useDispatch } from "react-redux";
import { sendCartToDB } from "../../../redux/actions/cartActions";
import { showLoading } from "../../../helpers/loading";

function PaymentPopUp({ total }) {
  // Redux states
  const { loading } = useSelector((state) => state.loading);
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const [send, setSend] = useState(true);
  const [userName, setUserName] = useState("");

  // states for the request
  const [user, setUser] = useState();
  const [input, setInput] = useState(null);
  const [done, setDone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (isAuthenticated()) {
      setUserName(getLocalStorage("user").username);
      setUser(getLocalStorage("user"));
    }
  }, [setUserName]);

  const sendData = () => {
    if (input) {
      dispatch(sendCartToDB(items, user, input, total, phoneNumber));

      setDone(true);
    } else {
      window.alert("You must upload a recepient picture");
    }
  };
  const refresh = () => {
    window.location.reload();
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
            {!done ? (
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

                <form className="d-flex flex-column align-items-center">
                  <div class="form-group">
                    <input
                      type="file"
                      class="form-control-file is-invalid"
                      id="exampleFormControlFile1"
                      onChange={(e) => setInput(e.target.files[0])}
                      required
                    />
                    {!input && (
                      <div class="invalid-feedback">You must upload a file</div>
                    )}
                  </div>
                  <div class="form-group mt-2">
                    <strong>
                      You can also send us you phone number so we can reache you
                      if there's any probleme.
                    </strong>
                    <input
                      type="tel"
                      class="form-control mt-4"
                      id="exampleFormControlFile1"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      minLength="8"
                      maxLength="8"
                      placeholder="write your phone number here"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            ) : (
              <div className="container">
                <h3>Dear {userName},</h3>
                <p>We thank you for your purchase 🙏</p>
                <p>All you need to do now, is to wait the admin's approvel.</p>
                <strong>This process may take a while</strong>{" "}
                <i>(at most 48h)</i>
              </div>
            )}
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn"
              data-dismiss="modal"
              onClick={refresh}
            >
              {loading ? showLoading() : "Close"}
            </button>
            {!done && (
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
