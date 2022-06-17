import * as React from "react";
import { useSelector } from "react-redux";
import { Success } from "../Alert";
import ShowInfoLogin from "../ShowInfoLogin";
import HeaderSlider from "./components/HeaderSlider";
import NavDesktop from "./components/NavDesktop";
import NavMobile from "./components/NavMobile";
import totalProduct from "./components/totalProduct";
import "./styles.scss";
const Header = () => {
  const cartProductArray = useSelector((state) => state.add_cart);
  const total = totalProduct(cartProductArray);

  return (
    <header>
      <HeaderSlider />
      <NavDesktop total={total} />
      <NavMobile total={total} />
      <ShowInfoLogin />
    </header>
  );
};
export default Header;
