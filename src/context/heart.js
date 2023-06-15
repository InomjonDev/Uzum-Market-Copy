import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addToHeart: (state, actions) => {
      let index = state.value.findIndex((i) => i.id === actions.payload.id);
      if (index < 0) {
        state.value = [...state.value, actions.payload];
      }
    },
    removeFromHeart: (state, actions) => {
      state.value = state.value.filter((i) => i.id !== actions.payload.id);
    },
  },
});

export const { addToHeart, removeFromHeart } = heartSlice.actions;
export default heartSlice.reducer;
