import React, { useEffect } from "react";
import emailjs from "emailjs-com";

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

  const emailParams = {
    userName: userName,
    userEmail: userMail,
  };

  const sendAcceptEmail = (e) => {
    emailjs
      .send(
        "service_gflmj5t",
        "template_s4nskbb",
        emailParams,
        "user_r0ERYcdhk45IfQAJoQpQx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendRejectEmail = (e) => {
    emailjs
      .send(
        "service_gflmj5t",
        "template_flzziru",
        emailParams,
        "user_r0ERYcdhk45IfQAJoQpQx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const submitOrder = () => {
    sendAcceptEmail();
    dispatch(allowOrder(orderID, userMail));
  };

  const declineOrder = () => {
    sendRejectEmail();
    dispatch(rejectOrder(orderID, userMail));
  };
  return (
    <div className="card mb-3">
      <h4 className="card-header">{userName}</h4>
      <div className="card-body col">
        <div classNameName="row">
          <div classNameName="col-sm-5 mb-4 mb-sm-0">
            <h5 className="card-title">{userMail}</h5>
            <p className="card-text">{userGsm}</p>
          </div>
          <div classNameName="col-sm-4">
            <ul>
              {courses &&
                courses.map(({ courseName }, i) => (
                  <li key={i}>{courseName}</li>
                ))}
            </ul>
            <h3>{total + " DT"}</h3>
          </div>

          <div classNameName="col d-flex justify-content-center align-items-center mt-4 mt-sm-0">
            <a
              classNameName="btn btn-primary"
              href={srcRecep}
              target="_blank"
              rel="noreferrer"
            >
              Download Recepient
            </a>
          </div>
        </div>
      </div>

      <div classNameName="card-footer">
        {loading ? (
          <div>{showLoading()}</div>
        ) : (
          <div>
            <button href="#" className="btn btn-info mr-3" onClick={submitOrder}>
              Accept
            </button>

            <button className="btn btn-outline-danger" onClick={declineOrder}>
              Refuse
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientInfos;
