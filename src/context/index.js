import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./heart";
import cart from "./cart";

export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart,
  },
});
