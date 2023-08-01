import { createSlice } from "@reduxjs/toolkit";

export const FolderNameSlice = createSlice({
  name: "foldername",
  initialState: {
    foldername: "",
  },
  reducers: {
    FolderNameUnit: (state, action) => {
      state.foldername=action.payload
    },
  },
});
export const { FolderNameUnit } = FolderNameSlice.actions;
export default FolderNameSlice.reducer;
