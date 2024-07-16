// import { createSlice } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { openModal } from "../modal/modalSlice";
// import cartItems from "../../cartItems";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState = {
  // cartItems:[],
  // cartItems: cartItems,
  cartItems: [], //from url
  amount: 1,
  totalAmount: 0,
  isLoading: true,
};

//todo:1st url data fetching using fetch()
// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((error) => console.log(error));
// });

//todo:2nd url data fetching using axios()
export const getCartItems = createAsyncThunk("cart/getCartItems", async(name,thunkAPI) => {
  try {
    // console.log(name)
    // console.log(thunkAPI)
    // console.log(thunkAPI.getState())
    // console.log(thunkAPI.dispatch(openModal()))
    const response =await axios(url);
    // console.log(response)
    return response.data;

  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong')
  }
});



const cartSlice = createSlice({
  name: "cart",
  initialState,
  //Slice part is handle here
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
    //todo:best way builder call back notation
    extraReducers:(builder)=>{
      builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });



  //todo url fetching [fetch and axios use] is handleing in exrtra reducers [API part]
  // extraReducers:{
  //   [getCartItems.pending]:(state)=>{
  //     state.isLoading=true;
  //   },
  //   [getCartItems.fulfilled]:(state,action)=>{
  //     // console.log(action.payload[0].id);
      
  //     state.isLoading=false;
  //     state.cartItems=action.payload;
  //   },
  //   [getCartItems.rejected]:(state)=>{
  //     state.isLoading=false;
  //   },
  // }


  }
});

// console.log(cartSlice) // cart:{actions:}
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice;
