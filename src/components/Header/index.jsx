import * as React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ShowInfoLogin from "../ShowInfoLogin";
import HeaderSlider from "./components/HeaderSlider";
import NavDesktop from "./components/NavDesktop";
import NavMobile from "./components/NavMobile";
import totalProduct from "./components/totalProduct";
import "./styles.scss";
const Header = () => {
  const cartProductArray = useSelector((state) => state.add_cart);
  const total = totalProduct(cartProductArray);
  const params = useLocation();
  React.useEffect(() => {
    if (params.pathname !== "/login") {
      sessionStorage.setItem("switchPage", "null");
    }
  }, [params]);
  if (params.pathname === "/admin") return <></>;
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
