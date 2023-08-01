import { createSlice } from "@reduxjs/toolkit";

export const ImageNow = createSlice({
  name: "path",
  initialState: {
    ImgNow: "",
  },
  reducers: {
    ImageNowaction: (state, action) => {
      state.ImgNow = action.payload;
    },
  },
});
export const { ImageNowaction } = ImageNow.actions;
export default ImageNow.reducer;
//Use for future for removing the upload button from content
