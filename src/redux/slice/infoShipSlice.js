import { createSlice } from "@reduxjs/toolkit";
const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
const infoShipSlice = createSlice({
  name: "infoShip",
  initialState: {
    id: "",
    nameUser: userInfo?.nameUser || "",
    email: userInfo?.email || "",
    phone: userInfo?.phone || "",
    address: userInfo?.address || "",
    payMethod: "Thanh toán khi giao hàng (COD)",
    totalPrice: "",
  },
  reducers: {
    changeInfoShip: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetInfoShip: (state, action) => {
      return {
        ...state,
        id: "",
        nameUser: userInfo?.nameUser || "",
        email: userInfo?.email || "",
        phone: userInfo?.phone || "",
        address: "",
        payMethod: "Thanh toán khi giao hàng (COD)",
        totalPrice: "",
      };
    },
  },
});
export default infoShipSlice;
