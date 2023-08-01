import { createSlice } from "@reduxjs/toolkit";

export const Download = createSlice({
  name: "data",
  initialState: {
    dataimg1: [],
  },
  reducers: {
    DownloadImage: (state, action) => {
      state.dataimg = action.payload;
    },
  },
});
export const { DownloadImage } = Download.actions;
export default Download.reducer;
