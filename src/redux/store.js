import { configureStore } from "@reduxjs/toolkit";
import msgSlice from "./features/msgSlice";
import cartSlice from "./features/cartSlice";
import serviceSlice from "./features/serviceSlice";

export const store = configureStore({
  reducer: {
    msgReducer: msgSlice,
    cart: cartSlice,
    services: serviceSlice,
  },
});

export default store;
