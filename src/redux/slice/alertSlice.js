import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: { showAlert: false, alertContent: "" },
  reducers: {
    changeAlert: (state, action) => {
      return { ...action.payload };
    },
  },
});
export default alertSlice;
