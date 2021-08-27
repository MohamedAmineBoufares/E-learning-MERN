import axios from "axios";
import {
  ADD_TO_CART,
  GET_USER_CART,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import {
  CLEAR_MESSAGES,
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";

export const addToCart = (data, userID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.post(`/api/cart/add/cart/item?id=${userID}`, {
      productID: data._id,
      productName: data.productName,
      productPrice: data.productPrice,
      fileName: data.fileName,
      videoUrl: data.videoUrl,
      previewUrl: data.previewUrl,
    });

    dispatch({ type: ADD_TO_CART, payload: data });

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Mregel ye ROJLA !",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);

    return response;
  } catch (error) {
    console.log("cant add course !");
    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE !",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);
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

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);

    return response;
  } catch (err) {
    console.log("cant remove course !");
    console.log("send chtraba9a api error: ", err);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE !",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);
  }
};

export const sendCartToDB = (data, user, src, total) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    console.log(data);

    const response = await axios.post("/api/cart/add", {
      userName: user.username,
      userEmail: user.email,
      userPhone: "",
      userID: user._id,
      course: data.map(
        ({
          productName,
          productID,
          fileName,
          productPrice,
          videoUrl,
          previewUrl,
        }) => ({
          courseID: productID,
          courseName: productName,
          courseSrc: fileName,
          coursePrice: productPrice,
          videoURL: videoUrl,
          previewURL: previewUrl,
          courseFile: "",
        })
      ),
      authorised: "false",
      picRecipient: src,
      total: total,
    });

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Mregel ye ROJLA !",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);

    return response;
  } catch (err) {
    console.log("send chtraba9a api error: ", err);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE !",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);
  }
};

export const getUserCart = (userID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.get(`/api/cart/user?id=${userID}`);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: GET_USER_CART,
      payload: response.data.cart,
    });

    return response;
  } catch (err) {
    console.log("get CART api error: ", err);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "Can't get user cart",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);
  }
};
