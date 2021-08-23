import axios from "axios";
import {
  GET_USERS_ORDERS,
  ALLOW_USER_ORDER,
} from "../constants/adminConstants";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";

export const getUsersOrders = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.get("/api/admin/getcourses");
    console.log(response);
    
    dispatch({
      type: GET_USERS_ORDERS,
      payload: response.data,
    });

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Jawek behi ",
    });

    return response;
  } catch (err) {
    console.log("get Orders api error: ", err);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE",
    });
  }
};
