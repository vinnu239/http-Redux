import {createSlice} from '@reduxjs/toolkit';


const cartSlice=createSlice({
    name:'cart',
    initialState:{isVisible:true},
    reducers:{
        toggle(state){
        state.isVisible=!state.isVisible
        }
    }
})

export const cartActions=cartSlice.actions;

export default cartSlice;
