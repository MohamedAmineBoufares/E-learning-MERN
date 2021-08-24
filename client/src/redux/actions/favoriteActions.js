import {
  ADD_TO_Favorite,
  GET_USER_FAVORITE,
} from "../constants/favoriteConstants";

import axios from "axios";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";

export const addToFavorite = (data, userID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.post(
      `/api/favortie/add/favortie/item?id=${userID}`,
      {
        productName: data.productName,
        productPrice: data.productPrice,
        fileName: data.fileName,
      }
    );

    dispatch({ type: ADD_TO_Favorite, payload: data });
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

    const response = await axios.get(`/api/favortie/get?id=${userID}`);

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
