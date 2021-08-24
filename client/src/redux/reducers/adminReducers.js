import {
  GET_USERS_ORDERS,
  ALLOW_USER_ORDER,
  REMOVE_USER_ORDER,
} from "../constants/adminConstants";

const INITIAL_STATE = {
  orders: [],
};

const adminReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_ORDERS:
      return {
        ...state,
        orders: [...action.payload],
      };

    case REMOVE_USER_ORDER:
      const index = state.orders.findIndex(
        (order) => order._id === action.payload
      );
      let newOrders = [...state.orders];
      if (index >= 0) {
        newOrders.splice(index, 1);
      } else {
        console.warn("NOOPE !");
      }

      return {
        ...state,
        orders: newOrders,
      };

    default:
      return state;
  }
};

export default adminReducers;
