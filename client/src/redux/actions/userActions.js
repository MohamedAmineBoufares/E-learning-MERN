import axios from "axios";

import {
  AUTHORISED,
  GET_COURSE,
  GET_USER_COURSES,
} from "../constants/userConstants";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import {
  CLEAR_MESSAGES,
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";

export const getUserCourses = (userID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.get(`/api/user/get/orders/${userID}`);

    dispatch({ type: GET_USER_COURSES, payload: response.data });

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Courses JEEEEW !",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);

    return response;
  } catch (error) {
    console.log("cant get user courses !");

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

export const getCourse = (courseID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(`/api/product/${courseID}`);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_COURSE,
      payload: response.data,
    });
  } catch (err) {
    console.log("getProducts api error: ", err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);
  }
};

export const setAuthorised = (userID, courseID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.get(
      `/api/user/get/authorised/${userID}/${courseID}`
    );

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: AUTHORISED,
      payload: response.data[0].authorised,
    });
  } catch (err) {
    console.log("get Auth api error: ", err);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "Nope !",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);
  }
};
