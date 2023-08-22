import {createSlice} from '@reduxjs/toolkit';


const cartSlice=createSlice({
    name:'cart',
    initialState:{isVisible:true,notification:null,bookVisible:false,movieVisible:false},
    reducers:{
        toggle(state){
        state.isVisible=!state.isVisible
        },
        bookToggle(state){
            state.bookVisible=!state.bookVisible
        },
        movieToggle(state){
            state.movieVisible=!state.movieVisible
        },
        showNotification(state,action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }

        }
    }
})

export const cartActions=cartSlice.actions;

export default cartSlice;
