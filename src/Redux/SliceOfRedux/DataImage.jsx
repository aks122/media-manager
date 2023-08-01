import { createSlice } from "@reduxjs/toolkit";

export const DataImage = createSlice({
  name: "data",
  initialState: {
    data: "",
  },
  reducers: {
    Data: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { Data } = DataImage.actions;
export default DataImage.reducer;
