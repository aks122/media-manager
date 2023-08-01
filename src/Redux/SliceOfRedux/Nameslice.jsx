import { createSlice } from "@reduxjs/toolkit";

export const NameSlice = createSlice({
  name: "namesherenow",
  initialState: {
    nameusernow: "",
  },
  reducers: {
    NameSliceAction: (state, action) => {
      state.nameusernow = action.payload;
    },
  
  },
});
export const { NameSliceAction, logoutCritia } = NameSlice.actions;
export default NameSlice.reducer;
