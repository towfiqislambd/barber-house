import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import serviceSlice from "./features/serviceSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    services: serviceSlice,
  },
});

export default store;
