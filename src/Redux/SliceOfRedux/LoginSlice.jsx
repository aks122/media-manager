import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    data: null,
    name: "",
  },
  reducers: {
    ValidUser: (state, action) => {
      state.data = action.payload;
    },
    Logout: (state, action) => {
      state.data = null;
    },
    Name: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { ValidUser, Logout, Name } = LoginSlice.actions;
export default LoginSlice.reducer;
