import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    // Actions
    addToFav: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromFav: (state, action) => {
      state.items = state.items.filter(
        (item) => item.courseID !== action.payload.courseID
      );
    },
  },
});

export const { addToFav, removeFromFav } = favoriteSlice.actions;

export const selectFav = (state) => state.favorite.items;

export default favoriteSlice.reducer;
