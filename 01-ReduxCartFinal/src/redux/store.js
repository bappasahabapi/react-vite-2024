import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import carSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: carSlice.reducer,
  },
});

export default store;
