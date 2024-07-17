import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState:{
        cartIsVisible:false
    },
    reducers:{
        toggleFn(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})


// export const {toggleFn} =uiSlice.actions;
export const uiActions =uiSlice.actions;
export default  uiSlice;
