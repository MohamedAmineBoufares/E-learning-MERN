import {
  GET_USERS_ORDERS,
  ALLOW_USER_ORDER,
} from "../constants/adminConstants";

const INITIAL_STATE = {
  orders: [],
};

const adminReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_ORDERS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case ALLOW_USER_ORDER:
      return {
        ...state,
        orders: [action.payload],
      };

    default:
      return state;
  }
};

export default adminReducers