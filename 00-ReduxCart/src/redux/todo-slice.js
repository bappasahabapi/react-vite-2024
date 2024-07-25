import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  totoalNotes: 0,
  isFavourite: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleFavourite: (state) => {
      state.isFavourite = !state.isFavourite;
    },
  },
});


// export const todoActions = todoSlice.actions;
export const {toggleFavourite} = todoSlice.actions;
export default todoSlice;
