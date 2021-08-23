import axios from "axios";
import {
  ADD_TO_CART,
  GET_USER_CART,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";

export const addToCart = (data, userID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.post(`/api/cart/add/cart/item?id=${userID}`, {
      productName: data.productName,
      productPrice: data.productPrice,
      fileName: data.fileName,
    });

    dispatch({ type: ADD_TO_CART, payload: data });

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Mregel ye ROJLA !",
    });

    return response;
  } catch (error) {
    console.log("cant add course !");
    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE !",
    });
  }
};

export const removeFromCart = (userID, _id, itemID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.post(`/api/cart/remove/${userID}/${itemID}`);

    dispatch({ type: REMOVE_FROM_CART, payload: _id });

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Mregel ye ROJLA !",
    });

    return response;
  } catch (err) {
    console.log("cant remove course !");
    console.log("send chtraba9a api error: ", err);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE !",
    });
  }
};

export const sendCartToDB = (data, user, src) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.post("/api/cart/add", {
      userName: user.username,
      userEmail: user.email,
      userPhone: "",
      course: data.map(({ productName }) => ({
        courseName: productName,
      })),
      authorised: "false",
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

// export const sendCartItemToDB = (data, userID, src) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });

//     const response = await axios.post(`/api/cart/add?id=${userID}`, {
//       course: data.map(({ productName }) => ({
//         courseName: productName,
//         authorised: "false",
//       })),
//       picRecipient: src,
//     });

//     dispatch({ type: STOP_LOADING });

//     dispatch({
//       type: SHOW_SUCCESS_MESSAGE,
//       payload: "Mregel ye ROJLA !",
//     });

//     return response;
//   } catch (err) {
//     console.log("send chtraba9a api error: ", err);

//     dispatch({ type: STOP_LOADING });

//     dispatch({
//       type: SHOW_ERROR_MESSAGE,
//       payload: "NOPE !",
//     });
//   }
// };

export const getUserCart = (userID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(`/api/cart/user?id=${userID}`);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_USER_CART,
      payload: response.data.cart,
    });
    console.log(response);

    return response;
  } catch (err) {
    console.log("get CART api error: ", err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "Can't get user cart",
    });
  }
};
