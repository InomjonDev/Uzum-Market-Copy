import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("uzum-cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      let index = state.value.findIndex((i) => i.id === actions.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...actions.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      localStorage.setItem("uzum-cart", JSON.stringify(state.value));
    },

    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      localStorage.setItem("uzum-cart", JSON.stringify(state.value));
    },

    decrementCart: (state, actions) => {
      let index = state.value.findIndex((i) => i.id === actions.payload.id);
      state.value = state.value.map((item, inx) =>
        inx === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("uzum-cart", JSON.stringify(state.value));
    },
  },
});

export const { addToCart, removeFromCart, decrementCart } = cartSlice.actions;
export default cartSlice.reducer;
