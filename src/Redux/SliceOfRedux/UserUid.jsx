import { createSlice } from "@reduxjs/toolkit";

export const UserUid = createSlice({
  name: "data",
  initialState: {
    Userid: "",
  },
  reducers: {
    UserUidaction: (state, action) => {
      state.Userid = action.payload;
    },
  },
});
export const { UserUidaction } = UserUid.actions;
export default UserUid.reducer;
