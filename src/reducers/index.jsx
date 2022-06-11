import { combineReducers } from "redux";
import addToCart from "./addToCart";
import { auth } from "./auth";
import { infoShip } from "./infoShip";
import { user } from "./user";

const rootReducers = combineReducers({
  add_cart: addToCart,
  login: auth,
  users: user,
  infoShips: infoShip,
});
export default rootReducers;
