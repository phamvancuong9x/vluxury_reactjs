import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  stringToNumberMoney,
  totalPrice,
} from "../Cart/components/handleFunction";
import { InfoShip } from "./components/InfoShip";
import { ModalOrder } from "./components/ModalOrder";
import { PayMeThod } from "./components/PayMeThod";
import { ProductCartShow } from "./components/ProductCartShow";
import { ProductInfo } from "./components/ProductInfo";
import "./styles.scss";

function Checkout() {
  const tabs = ["infoShip", "payMethod", "modalActive"];
  const [showContent, setShowContent] = useState(tabs[0]);
  const [showProductCart, setShowProductCart] = useState(false);
  const ProductListCart = useSelector((state) => state.add_cart);
  const total_price = stringToNumberMoney(totalPrice(ProductListCart));
  return (
    <div className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <section className="information-order">
              <Link to={"/"} title="title">
                <h2 className="information-order-title">
                  VLUXURY - THỜI TRANG DÀNH CHO PHÁI MẠNH
                </h2>
              </Link>
              <div className="toggle-product-cart">
                <i className="fas fa-shopping-cart"></i>
                <div className="toggle-product-cart__text">
                  {!showProductCart && (
                    <ProductCartShow
                      text={" Hiện thông tin đơn hàng"}
                      showProductCart={showProductCart}
                      setShowProductCart={setShowProductCart}
                    />
                  )}
                  {showProductCart && (
                    <ProductCartShow
                      text={" Ẩn thông tin đơn hàng"}
                      showProductCart={showProductCart}
                      setShowProductCart={setShowProductCart}
                    />
                  )}
                </div>
              </div>
              <div
                className={
                  !showProductCart
                    ? "product-list"
                    : "product-list product-list-active"
                }
              >
                {ProductListCart?.map((product, i) => {
                  return <ProductInfo key={i} product={product} />;
                })}
              </div>
              <div className="information-order__discount-code">
                <div className="discount-code__input">
                  <input type="text" placeholder="Mã giảm giá" />
                  <span className="discount-code__btn-use">Sử dụng</span>
                </div>
              </div>
              <div className="information-order__sum-price">
                <span>Tổng tiền</span>
                <span>{total_price}</span>
              </div>
            </section>
          </div>
          <div className="col-12 col-lg-7">
            <div className="checkout-order">
              <Link to="/" title="title">
                <h2 className="checkout-order__title">
                  VLUXURY - THỜI TRANG DÀNH CHO PHÁI MẠNH
                </h2>
              </Link>
              <div className="breadcrumbs">
                <Link to="/cart" title="title">
                  Giỏ hàng
                </Link>
                <span>/ Thông tin vận chuyển </span>
                <span> / Phương thức thanh toán</span>
              </div>
              {showContent == tabs[0] && (
                <InfoShip setShowContent={setShowContent} />
              )}
              {showContent == tabs[1] && (
                <PayMeThod
                  setShowContent={setShowContent}
                  total_price={total_price}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalOrder showContent={showContent} />
    </div>
  );
}

export default Checkout;
