import { createSlice } from "@reduxjs/toolkit";
const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
const infoShipSlice = createSlice({
  name: "infoShip",
  initialState: {
    nameUser: userInfo?.nameUser || "",
    email: userInfo?.email || "",
    phone: userInfo?.phone || "",
    address: "",
    payMethod: "Thanh toán khi giao hàng (COD)",
    totalPrice: "",
  },
  reducers: {
    changeInfoShip: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export default infoShipSlice;
