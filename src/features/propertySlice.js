import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setProperty: (state, action) => {
      state.value = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setProperty } = propertySlice.actions;

export default propertySlice.reducer;
