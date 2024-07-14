import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  // cartItems:[],
  cartItems: cartItems,
  amount: 1,
  totalAmount: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      // return {cartItems:[]}
    },
    removeItem: (state, action) => {
      // console.log(action)
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount++;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount--;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let totalAmount = 0;
      state.cartItems.forEach((item) => {
        amount = item.amount + amount;
        totalAmount = item.amount * item.price + totalAmount;
        // totalAmount+=item.amount *item.price
      });
      state.amount = amount;
      state.totalAmount = totalAmount;
    },
  },
});

// console.log(cartSlice) // cart:{actions:}
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice;
