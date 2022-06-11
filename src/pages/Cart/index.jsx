import React from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs";
import { CartContent } from "./components/CartContent";
import { CartEmpty } from "./components/CartEmpty";
import "./styles.scss";

function Cart() {
  const ProductCartList = useSelector((state) => state.add_cart);
  if (ProductCartList.length == 0) {
    localStorage.setItem("cart", "[]");
  }
  return (
    <>
      <Breadcrumbs title={"Giỏ hàng"} />
      <div className="container">
        <h2>Giỏ hàng</h2>
        {ProductCartList.length == 0 ? (
          <CartEmpty />
        ) : (
          <CartContent ProductCartList={ProductCartList} />
        )}
      </div>
    </>
  );
}

export default Cart;
