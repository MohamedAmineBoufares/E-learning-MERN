import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";

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

export const sendCartToDB = (data, userID, src) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.post(`/api/product/new/course?id=${userID}`, {
      course: data.map(({ productName }) => ({
        courseName: productName,
        authorised: "false",
      })),
      picRecipient: src,
    });

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Mregel ye ROJLA !",
    });

    return response;
  } catch (err) {
    console.log("send chtraba9a api error: ", err);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE !",
    });
  }
};
