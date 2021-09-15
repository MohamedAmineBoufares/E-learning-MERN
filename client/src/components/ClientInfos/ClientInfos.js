import React, { useEffect } from "react";
import { Avatar } from "@material-ui/core";

import { showLoading } from "../../helpers/loading";
import "./ClientInfos.css"

// redux
import { useDispatch, useSelector } from "react-redux";
import { clearMessages } from "../../redux/actions/messageActions";
import { allowOrder, rejectOrder } from "../../redux/actions/adminACtions";

function ClientInfos({
  userName,
  userMail,
  userPic,
  courses,
  srcRecep,
  total,
  orderID,
  userID
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
  <div>
    <table className="table table-bordered">
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
        {<tr>
          <th scope="row">
          <Avatar src={userPic}>{userPic}</Avatar>
            <h5>{userName}</h5>
            <h6>{userMail}</h6>
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
                <div>
                  <button className="accept__btn" onClick={submitOrder}>
                    Accept
                  </button>

                  <button className="refuse__btn" onClick={declineOrder}>
                    Refuse
                  </button>
                </div>
              )}
              </th>
          </tr>
          }         
        </tbody>
      </table>
</div>
    );

/* return (
      <div className={styles.left}>
        <Avatar src={userPic}>{userPic}</Avatar>
        <div>
          <h2>{userName}</h2>
          <p>{userGsm}</p>
          <p>{userMail}</p>
        </div>

        <div>
          <h2>
            Course<i>(s)</i>:
          </h2>
          <ul>
            {courses && courses.map(({ courseName }) => <li>{courseName}</li>)}
          </ul>
        </div>

        <div className={styles.user__money}>
          <h2>To pay :</h2>
          <h3>{total} DT</h3>
        </div>

        <div >
          <a href={srcRecep} download>
            donwload payment receipt
          </a>
        </div>

        <div>
          {loading ? (
            <div>{showLoading()}</div>
          ) : (
            <div>
              <div onClick={submitOrder}>
                Accept
              </div>

              <div onClick={declineOrder}>
                Refuse
              </div>
            </div>
          )}
        </div>
    </div>
  ); */
  
}
export default ClientInfos;
