import { combineReducers } from "redux";
import addToCart from "./addToCart";
import { auth } from "./auth";
import { cart } from "./cart";
import { infoShip } from "./infoShip";
import { user } from "./user";

const rootReducers = combineReducers({
  add_cart: addToCart,
  login: auth,
  users: user,
  infoShips: infoShip,
  Cart: cart,
});
export default rootReducers;
