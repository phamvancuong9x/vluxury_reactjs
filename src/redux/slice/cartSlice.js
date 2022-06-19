import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showNotifyDeleteProduct: false,
    idShowConfirm: { id: null, size: null },
  },
  reducers: {
    showNotifyDelete: (state, action) => {
      return { ...state, showNotifyDeleteProduct: action.payload };
    },
    IdShowConfirm: (state, action) => {
      return { ...state, idShowConfirm: action.payload };
    },
  },
});
export default cartSlice;
