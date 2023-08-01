import { createSlice } from "@reduxjs/toolkit";

export const ValueName = createSlice({
  name: "valueName",
  initialState: {
    headerName: "",
    
  },
  reducers: {
    ValueAction: (state, action) => {
      state.headerName = action.payload;
    },
  },
});
export const { ValueAction } = ValueName.actions;
export default ValueName.reducer;
