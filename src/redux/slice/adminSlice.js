import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    newOrderQuantity: 0,
    orderList: null,
    idShowOrderConfirm: false,
    showOrderConfirm: null,
  },
  reducers: {
    changeQuantityOrder: (state, action) => {
      return { ...state, newOrderQuantity: action.payload };
    },
    changeOrderList: (state, action) => {
      console.log(action.payload);
      return { ...state, orderList: action.payload };
    },
    changeIdShowOrderConfirm: (state, action) => {
      console.log(action.payload);
      return { ...state, idShowOrderConfirm: action.payload };
    },
    changeShowOrderConfirm: (state, action) => {
      console.log(action.payload);
      return { ...state, showOrderConfirm: action.payload };
    },
  },
});
export default adminSlice;
