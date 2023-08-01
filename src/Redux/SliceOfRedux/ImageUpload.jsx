import { createSlice } from "@reduxjs/toolkit";

export const ImageUpload = createSlice({
  name: "Upload",
  initialState: {
    ImgUpload: "",
  },
  reducers: {
    ImageUploadaction: (state, action) => {
      state.ImgUpload = action.payload;
    },
  },
});
export const { ImageUploadaction } = ImageUpload.actions;
export default ImageUpload.reducer;
//Use for future for removing the upload button from content
