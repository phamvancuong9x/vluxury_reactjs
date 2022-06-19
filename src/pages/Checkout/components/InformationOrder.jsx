import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductCartShow } from "./ProductCartShow";
import { ProductInfo } from "./ProductInfo";

export function InformationOrder({ ProductListCart, total_price }) {
  const [showProductCart, setShowProductCart] = useState(false);
  return (
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
          !showProductCart ? "product-list" : "product-list product-list-active"
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
  );
}
