import React, { useEffect } from "react";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import ClientInfos from "./ClientInfos/ClientInfos";

// redux
import { useSelector, useDispatch } from "react-redux";
import { clearMessages } from "../../redux/actions/messageActions";
import { getUsersOrders } from "../../redux/actions/adminACtions";

function AdminOrdersModal() {
  /********************************
   * REDUX GLOBAL STATE PROPERTIES
   ********************************/
  const { successMsg, errorMsg } = useSelector((state) => state.messages);

  const orders = useSelector((state) => state.orders.orders);

  const dispatch = useDispatch();

  const handleMessages = (evt) => {
    dispatch(clearMessages());
  };

  useEffect(() => {
    dispatch(getUsersOrders());
  }, [dispatch]);

  return (
    <div id="viewOrdersModal" className="modal col" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title">View Orders</h5>
            <button className="close" data-dismiss="modal">
              <span>
                <i className="fas fa-times"></i>
              </span>
            </button>
          </div>
          <div className="modal-body my-4">
            {errorMsg && showErrorMsg(errorMsg)}
            {successMsg && showSuccessMsg(successMsg)}

            {orders &&
              orders.map(
                ({
                  userName,
                  userEmail,
                  userPhone,
                  userID,
                  _id,
                  course,
                  total,
                  picRecipient

                }) => (
                  <ClientInfos
                    key={_id}
                    orderID={_id}
                    userName={userName}
                    userGsm={userPhone}
                    userMail={userEmail}
                    courses={course}
                    total={total}
                    userID={userID}
                    srcRecep={picRecipient}
                  />
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOrdersModal;
