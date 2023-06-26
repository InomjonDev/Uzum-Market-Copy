import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const proReloadSlice = createSlice({
  name: "proReload",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = proReloadSlice.actions;
export default proReloadSlice.reducer;
