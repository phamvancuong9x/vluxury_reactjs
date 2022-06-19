import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slice/addToCartSlice";
import authSlice from "./slice/authSlice";
import cartSlice from "./slice/cartSlice";
import infoShipSlice from "./slice/infoShipSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    add_cart: addToCartSlice.reducer,
    login: authSlice.reducer,
    users: userSlice.reducer,
    infoShips: infoShipSlice.reducer,
    Cart: cartSlice.reducer,
  },
});
export default store;
