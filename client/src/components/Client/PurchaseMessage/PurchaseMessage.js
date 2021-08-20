import React, { useState, useEffect } from "react";
import styles from "./PurchaseMessage.module.css";
import { getLocalStorage } from "../../../helpers/localStorage";
import { showErrorMsg, showSuccessMsg } from "../../../helpers/message";
import { showLoading } from "../../../helpers/loading";

// REDUX !
import { useSelector, useDispatch } from "react-redux";
import { clearMessages } from "../../../redux/actions/messageActions";
import { sendCartToDB } from "../../../redux/actions/cartActions";

export default function PurchaseMessage({ handleClose }) {
  // Redux states
  const { loading } = useSelector((state) => state.loading);
  const { successMsg, errorMsg } = useSelector((state) => state.messages);
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  // states for the request
  const [userID, setUserID] = useState();
  const [input, setInput] = useState("");

  useEffect(() => {
    setUserID(getLocalStorage("user")._id);
    dispatch(clearMessages());
  }, [dispatch]);

  const sendPurchase = async () => {
    dispatch(sendCartToDB(items, userID, input));
  };

  return (
    <div className={styles.popup__box}>
      <div className={styles.box}>
        <h1>Important !</h1>
        <p>
          Dear Moahmed Amine, In order to buy this course, all you need to do is
          to <strong>visit the neareast the post office to your house</strong>{" "}
          and send money to this account number{" "}
          <span style={{ color: "#2A9D8F" }}>“ 123456789217 “</span> .<br />{" "}
          After doing that, all you need to do is writing the transaction number
          in this box here :
        </p>
        <div className={styles.transaction__number__container}>
          {loading ? (
            <div>{showLoading()}</div>
          ) : (
            <div>
              <input
                className={styles.transaction__number}
                placeholder="Write transaction number here"
                type="number"
                min="10000"
                max="20000"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={sendPurchase}>Submit</button>
            </div>
          )}
        </div>

        <p>
          After dowing all the above steps, all you need to do now is to wait
          the admin’s approvel, this may take a while <i>( at most 48h )</i>.
        </p>
        <br />
        <p>
          We thank you for your patience, and we hope you enjoy this course 😄 .
        </p>
      </div>
      <div>
        {errorMsg && showErrorMsg(errorMsg)}
        {successMsg && showSuccessMsg(successMsg)}
      </div>
    </div>
  );
}
