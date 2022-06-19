import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: JSON.parse(sessionStorage.getItem("stateLogin") || false),
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
  },
});
export default authSlice;
