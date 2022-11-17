import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
