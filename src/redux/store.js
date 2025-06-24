import { configureStore } from "@reduxjs/toolkit";
import msgSlice from "./features/msgSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    msgReducer: msgSlice,
    cart: cartSlice,
  },
});

export default store;
