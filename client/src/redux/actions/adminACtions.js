import axios from "axios";
import {
  GET_USERS_ORDERS,
  REMOVE_USER_ORDER,
} from "../constants/adminConstants";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import {
  CLEAR_MESSAGES,
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";

export const getUsersOrders = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.get("/api/admin/getcourses");

    dispatch({
      type: GET_USERS_ORDERS,
      payload: response.data,
    });

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Jawek behi ",
    });

    dispatch({
      type: CLEAR_MESSAGES,
    });

    return response;
  } catch (err) {
    console.log("get Orders api error: ", err);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE",
    });

    dispatch({
      type: CLEAR_MESSAGES,
    });
  }
};

export const allowOrder = (orderID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.post(`/api/admin/alloworder/${orderID}`);

    dispatch({ type: STOP_LOADING });

    dispatch({ type: REMOVE_USER_ORDER, payload: orderID });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Order Allowed",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);

    return response;
  } catch (err) {
    console.log("allow Order api error: ", err);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);
  }
};

export const rejectOrder = (orderID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.post(`/api/admin/rejectorder/${orderID}`);

    dispatch({ type: STOP_LOADING });

    dispatch({ type: REMOVE_USER_ORDER, payload: orderID });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Order Rejected",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);

    return response;
  } catch (err) {
    console.log("allow Order api error: ", err);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);
  }
};
