import { ADD_TO_CART, REMOVE_FROM_CART, SEND_CART_TO_DB } from "../constants/cartConstants";

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
      // return state.filter((item) => item._id !== action.payload._id);

      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      let newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      else {
        console.warn("NOOPE !")
      }

      return {
        ...state,
        items: newCart,
      };

    default:
      return state;
  }
};

export default cartReducers;
