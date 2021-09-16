import React, { useEffect } from "react";
import styles from "./ClientInfos.module.css";
import { Avatar } from "@material-ui/core";

import { showLoading } from "../../../helpers/loading";

// redux
import { useDispatch, useSelector } from "react-redux";
import { clearMessages } from "../../../redux/actions/messageActions";
import { allowOrder, rejectOrder } from "../../../redux/actions/adminACtions";

function ClientInfos({
  userName,
  userGsm,
  userMail,
  userPic,
  courses,
  srcRecep,
  total,
  orderID,
  userID,
}) {
  const { loading } = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch]);

  const submitOrder = () => {
    dispatch(allowOrder(orderID, userMail));
  };

  const declineOrder = () => {
    dispatch(rejectOrder(orderID, userMail));
  };

  return (
    <div class="card mb-3">
      <h4 class="card-header">{userName}</h4>
      <div class="card-body col">
        <div className="row">
          <div className="col-sm-5 mb-4 mb-sm-0">
            <h5 class="card-title">{userMail}</h5>
            <p class="card-text">{userGsm}</p>
          </div>
          <div className="col-sm-4">
            <ul>
              {courses &&
                courses.map(({ courseName }) => <li>{courseName}</li>)}
            </ul>
            <h3>{total + " DT"}</h3>
          </div>

          <div className="col d-flex justify-content-center align-items-center mt-4 mt-sm-0">
            <a
              className="btn btn-primary"
              href={srcRecep}
              target="_blank"
              rel="noreferrer"
            >
              Download Recepient
            </a>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button href="#" class="btn btn-info mr-3">
          Accept
        </button>

        <button class="btn btn-outline-danger">Refuse</button>
      </div>
    </div>
  );
}

export default ClientInfos;

{
  /* <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Students</th>
          <th scope="col">Courses</th>
          <th scope="col">To Pay</th>
          <th scope="col">Payment reciept</th>
          <th scope="col">Process</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">
            <h5>{userName}</h5>
            <h6>{userMail}</h6>
            <h6>{userGsm}</h6>
          </th>

          <ul>
            {courses && courses.map(({ courseName }) => <li>{courseName}</li>)}
          </ul>

          <th>
            <h3>{total} DT</h3>
          </th>

          <a className="download" href={srcRecep} download>
            donwload
          </a>

          <th>
            {loading ? (
              <div>{showLoading()}</div>
            ) : (
              <div className="col d-flex justify-content-between">
                <button className="btn btn-primary" onClick={submitOrder}>
                  Accept
                </button>

                <button className="btn" onClick={declineOrder}>
                  Refuse
                </button>
              </div>
            )}
          </th>
        </tr>
      </tbody>
    </table> */
}
