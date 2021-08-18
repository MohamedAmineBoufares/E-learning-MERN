import { ADD_TO_Favorite } from "../constants/favoriteConstants";

const INITIAL_STATE = {
  items: [],
};

const favoriteReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_Favorite:
      return {
        ...state,
        items: [...state.items, action.payload]
      }

    default:
      return state;
  }
};

export default favoriteReducers;