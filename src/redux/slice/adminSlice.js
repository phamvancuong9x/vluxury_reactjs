import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    newOrderQuantity: 0,
    orderList: null,
    idShowOrderConfirm: false,
    showOrderConfirm: null,
    reasonCannel: "",
  },
  reducers: {
    changeQuantityOrder: (state, action) => {
      return { ...state, newOrderQuantity: action.payload };
    },
    changeOrderList: (state, action) => {
      return { ...state, orderList: action.payload };
    },
    changeIdShowOrderConfirm: (state, action) => {
      return { ...state, idShowOrderConfirm: action.payload };
    },
    changeShowOrderConfirm: (state, action) => {
      return { ...state, showOrderConfirm: action.payload };
    },
  },
});
export default adminSlice;
