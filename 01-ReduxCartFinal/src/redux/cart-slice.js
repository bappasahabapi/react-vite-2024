import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    totalQuantity: 0,
    // totalAmount:0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload; // payload is {}
      const existingItem = state.item.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      //add item to cart for first time using
      if (!existingItem) {
        state.item.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }
      //if the item exist
      else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.item.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.item = state.item.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice-existingItem.price;
      }
    },
  },
});

export const {addItemToCart,removeItemFromCart}=carSlice.actions;
export default carSlice;