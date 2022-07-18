import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(sessionStorage.getItem("userInfo") || "{}"),
  reducers: {
    changeUserInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export default userSlice;
