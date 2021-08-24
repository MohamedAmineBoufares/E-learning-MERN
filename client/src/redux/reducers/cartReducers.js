import {
  ADD_TO_CART,
  GET_USER_CART,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

const INITIAL_STATE = {
  items: [],
};

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_FROM_CART:
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      let newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn("NOOPE !");
      }

      return {
        ...state,
        items: newCart,
      };

    case GET_USER_CART:
      return {
        ...state,
        items: [...action.payload],
      };

    default:
      return state;
  }
};

export default cartReducers;
