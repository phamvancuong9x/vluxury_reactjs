import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    showAlert: false,
    alertContent: "",
    showAlertError: false,
    alertContentError: "",
  },
  reducers: {
    changeAlert: (state, action) => {
      return { ...action.payload };
    },
    changeAlertError: (state, action) => {
      console.log(action.payload);
      return { ...action.payload };
    },
  },
});
export default alertSlice;
