import React, { Fragment, useState, useEffect } from "react";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import ClientInfos from "../components/ClientInfos/ClientInfos";

// redux
import { useSelector, useDispatch } from "react-redux";
import { clearMessages } from "../redux/actions/messageActions";
import { getUsersOrders } from "../redux/actions/adminACtions";

function AdminOrdersModal() {
  /********************************
   * REDUX GLOBAL STATE PROPERTIES
   ********************************/
  const { loading } = useSelector((state) => state.loading);
  const { successMsg, errorMsg } = useSelector((state) => state.messages);

  const orders = useSelector((state) => state.orders.orders[0]);

  const dispatch = useDispatch();
  /********************************
   * COMPONENT STATE PROPERTIES
   ********************************/
  const [clientSideError, setClientSideError] = useState("");

  /********************************
   * EVENT HANDLERS
   ********************************/
  const handleMessages = (evt) => {
    dispatch(clearMessages());
    setClientSideError("");
  };

  useEffect(() => {
    dispatch(getUsersOrders());
    console.log("Hello", orders);
  }, [dispatch]);

  return (
    <div id="viewOrdersModal" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form>
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title">View Orders</h5>
              <button className="close" data-dismiss="modal">
                <span>
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body my-4">
              {clientSideError && showErrorMsg(clientSideError)}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {loading ? (
                <div className="text-center">{showLoading()} </div>
              ) : (
                <Fragment>
                  {orders &&
                    orders.map(({ userName, userEmail, userPhone, _id, course }) => (
                      <ClientInfos
                        key={_id}
                        userName={userName}
                        userGsm="123"
                        userMail="@mail"
                        courses={course}
                      />
                    ))}
                </Fragment>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-warning text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminOrdersModal;
