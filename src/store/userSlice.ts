import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "joegreen-service-library/dist/services/orderService";
interface UserState {
  email: string;
  accessToken: string;
  userCart: CartItem[];
}

const initialState: UserState = {
  email: "",
  accessToken: "",
  userCart: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.userCart.findIndex(
        (item) => item.id === newItem.id,
      );
      if (existingItemIndex > -1) {
        state.userCart[existingItemIndex].quantity = newItem.quantity;
        state.userCart[existingItemIndex].addons = newItem.addons;
      } else {
        state.userCart.push(newItem);
      }
    },
    removeFromCart: (state, action) => {
      state.userCart = state.userCart.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCart: (state, action) => {
      state.userCart = [];
    },
  },
});

export const {
  updateEmail,
  updateAccessToken,
  addToCart,
  removeFromCart,
  clearCart,
} = userSlice.actions;

export default userSlice.reducer;
