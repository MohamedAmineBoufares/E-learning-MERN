import {
  ADD_TO_Favorite,
  GET_USER_FAVORITE,
  REMOVE_FROM_FAV,
} from "../constants/favoriteConstants";

const INITIAL_STATE = {
  items: [],
};

const favoriteReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_Favorite:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case GET_USER_FAVORITE:
      return {
        ...state,
        items: [...action.payload],
      };

    case REMOVE_FROM_FAV:
      const index = state.items.findIndex(
        (item) => item.productID === action.payload
      );
      let newFav = [...state.items];
      if (index >= 0) {
        newFav.splice(index, 1);
      } else {
        console.warn("NOOPE !");
      }

      return {
        ...state,
        items: newFav,
      };

    default:
      return state;
  }
};

export default favoriteReducers;
