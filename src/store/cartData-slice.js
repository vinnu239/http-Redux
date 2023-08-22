import { createSlice } from "@reduxjs/toolkit";

const cartDataSlice = createSlice({
    name: 'cartData',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed:false
    },
    reducers: {
        // this new reducer is reponsoble for changing the intial state which help for fetching the data
        // once any change i  this value the useSelector will trigger and execute it
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
          },
        addItemToCart(state, action) {

            const newItem = action.payload;
            const existingItem = state.items.find((item)=>item.id ===newItem.id);
            state.totalQuantity++;
            state.changed=true;
            if(!existingItem){
                // here as per basic push change the original state of array but here dur to rtk it not change
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice+newItem.price;
            }

        },
        removeItemFromCart (state,action){
            const id =action.payload;
            const existingItem=state.items.find((item)=>item.id===id);
            state.totalQuantity--;
            state.changed=true;
            if(existingItem.quantity===1){
             state.items= state.items.filter((item)=> item.id !==id);

            }
            else{
             existingItem.quantity--;
             existingItem.totalPrice = existingItem.totalPrice-existingItem.price;
            }
        }

    }
})


export const cartDatActions = cartDataSlice.actions;
export default cartDataSlice;