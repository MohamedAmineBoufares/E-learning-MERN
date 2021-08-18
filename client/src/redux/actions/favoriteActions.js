import { ADD_TO_Favorite } from "../constants/favoriteConstants";

export const addToFavorite = (data) => (dispatch) => {
  try {
    dispatch({ type: ADD_TO_Favorite, payload: data });
  } catch (error) {
    console.log("cant add course !");
  }
};

