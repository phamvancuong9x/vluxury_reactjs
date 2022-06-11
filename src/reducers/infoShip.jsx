const userInfo =
  !!sessionStorage.getItem("userInfo") &&
  JSON.parse(sessionStorage.getItem("userInfo"));
const initState = {
  nameUser: userInfo?.nameUser || "",
  email: userInfo?.email || "",
  phone: userInfo?.phone || "",
  address: "",
  payMethod: "Thanh toán khi giao hàng (COD)",
  totalPrice: "",
};
export const infoShip = (state = initState, action) => {
  switch (action.type) {
    case "changeInfoShip":
      const newInfoShip = { ...state, ...action.payload };
      return newInfoShip;

    default:
      return state;
  }
};
