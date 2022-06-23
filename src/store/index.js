import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import cartDataSlice from "./cartData-slice";

const store = configureStore({
   reducer:{ cart:cartSlice.reducer,cartData:cartDataSlice.reducer}
});
export default store;