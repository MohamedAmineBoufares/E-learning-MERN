import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

export const addToCart = (data) => (dispatch) => {
  try {
    dispatch({ type: ADD_TO_CART, payload: data });
  } catch (error) {
    console.log("cant add course !");
  }
};

export const removeFromCart = (_id) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_CART, payload: _id });
  } catch (error) {
    console.log("cant remove course !");
  }
};
