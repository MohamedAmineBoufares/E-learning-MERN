import {
  ADD_TO_Favorite,
  GET_USER_FAVORITE,
  REMOVE_FROM_FAV,
} from "../constants/favoriteConstants";

import axios from "axios";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import {
  CLEAR_MESSAGES,
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";

export const addToFavorite = (data, userID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    console.log(data._id);

    const response = await axios.post(`/api/favorite/add?id=${userID}`, {
      productID: data._id,
      productName: data.productName,
      productPrice: data.productPrice,
      productDesc: data.productDesc,
      productCategory: data.productCategory,
      fileName: data.fileName,
      videoUrl: data.videoUrl,
      previewUrl: data.previewUrl,
    });

    dispatch({
      type: ADD_TO_Favorite,
      payload: {
        productID: data._id,
        productName: data.productName,
        productPrice: data.productPrice,
        productDesc: data.productDesc,
        productCategory: data.productCategory,
        fileName: data.fileName,
        videoUrl: data.videoUrl,
        previewUrl: data.previewUrl,
      },
    });
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Mregel ye ROJLA !",
    });

    return response;
  } catch (error) {
    console.log("cant add to favorites !");
    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE !",
    });
  }
};

export const getUserFavorite = (userID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.get(`/api/favorite/get?id=${userID}`);

    dispatch({ type: GET_USER_FAVORITE, payload: response.data.favortie });

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Mregel ye ROJLA !",
    });

    return response;
  } catch (error) {
    console.log("cant add to favorites !");
    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "NOPE !",
    });
  }
};

export const removeFromFavList = (userID, itemID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.post(
      `/api/favorite/remove/${userID}/${itemID}`
    );

    dispatch({ type: REMOVE_FROM_FAV, payload: itemID });

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
