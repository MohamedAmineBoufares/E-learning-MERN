import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Actions
    addToCart: (state, action) => {
      const inCart = state.items.find((item) =>
        item.courseID === action.payload.courseID ? true : false
      );
      state.items = inCart ? state.items.map(item => item.courseID === action.payload.courseID ? [...item, item.quantity+=1]:item) : [state.items, action.payload]
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.courseID !== action.payload.courseID
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
