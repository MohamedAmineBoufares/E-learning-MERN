import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chapters: [],
};

export const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    // Actions
    addToChap: (state, action) => {
      state.chapters = [...state.chapters, action.payload];

      // state.chapters = state.chapters.filter(
      //     (chap) => chap !== action.payload
      // )
    },
    // removeFromChap: (state, action) => {
    //   state.items = state.items.filter(
    //     (item) => item.courseID !== action.payload.courseID
    //   );
    // },
  },
});

export const { addToChap } = chaptersSlice.actions;

export const selectChapters = (state) => state.chapters.items;

export default chaptersSlice.reducer;
