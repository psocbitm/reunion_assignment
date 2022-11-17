import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPrice } = priceSlice.actions;

export default priceSlice.reducer;
