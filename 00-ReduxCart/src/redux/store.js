import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import carSlice from "./cart-slice";
import todoSlice from "./todo-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: carSlice.reducer,
    todo:todoSlice.reducer
  },
});

export default store;
