import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("uzum-heart")) || [],
};

const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addToHeart: (state, actions) => {
      let index = state.value.findIndex((i) => i.id === actions.payload.id);
      if (index < 0) {
        state.value = [...state.value, actions.payload];
        localStorage.setItem("uzum-heart", JSON.stringify(state.value));
      }
    },
    removeFromHeart: (state, actions) => {
      state.value = state.value.filter((i) => i.id !== actions.payload.id);
      localStorage.setItem("uzum-heart", JSON.stringify(state.value));
    },
  },
});

export const { addToHeart, removeFromHeart } = heartSlice.actions;
export default heartSlice.reducer;
