import { createSlice } from "@reduxjs/toolkit";

export const ImagePath = createSlice({
  name: "pathnowhere",
  initialState: {
    ImgPath: "",
  },
  reducers: {
    ImagePathaction: (state, action) => {
      state.ImgPath = action.payload;
    },
  },
});
export const { ImagePathaction } = ImagePath.actions;
export default ImagePath.reducer;
//Use for future for removing the upload button from content
