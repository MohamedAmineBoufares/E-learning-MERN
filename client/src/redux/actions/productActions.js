import axios from "axios";
import { uploadPic } from "../../api/order";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import {
  CLEAR_MESSAGES,
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";

import {
  CREATE_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/productConstants";

export const createProduct = (data) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const src = data.productImage;

    const uploadCloudinaryPIC = await uploadPic(src, "CourseThumbnails");
    const pic = uploadCloudinaryPIC.data.secure_url;

    data.productImage = pic;

    const response = await axios.post("/api/product", data);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);

    dispatch({
      type: CREATE_PRODUCT,
      payload: response.data.product,
    });
  } catch (err) {
    console.log("createProduct api error: ", err);
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

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/product");
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data.products,
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

export const getProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.get(`/api/product/${productId}`);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: GET_PRODUCT,
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

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await axios.delete(`/api/product/${productId}`);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: DELETE_PRODUCT,
      payload: response.data,
    });
  } catch (err) {
    console.log("deleteProduct api error: ", err);

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

export const updateProduct = (productId, data) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const src = data.productImage;

    const uploadCloudinaryPIC = await uploadPic(src, "CourseThumbnails");
    const pic = uploadCloudinaryPIC.data.secure_url;

    data.productImage = pic;

    const response = await axios.put(`/api/product/${productId}`, data);

    dispatch({ type: STOP_LOADING });

    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: "Product updated",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);

    return response;
  } catch (err) {
    console.log("updateProduct api error: ", err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: "Error updating product",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
    }, 2000);
  }
};
