import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.productData.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    deleteItem: (state, action, itemId) => {
      state.productData = state.productData.filter((item) => item.id !== action.payload)
    },
    resetCart: (state) => {
      state.productData = []
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    }
  },
});
export const { addToCart, addUser, removeUser, deleteItem, resetCart, incrementQuantity, decrementQuantity } = bazarSlice.actions;

export default bazarSlice.reducer;
