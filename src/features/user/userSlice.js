import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { updateUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
