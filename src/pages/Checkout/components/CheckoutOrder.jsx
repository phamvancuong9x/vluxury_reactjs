import { Link } from "react-router-dom";
import { tabs } from "./constant";
import { InfoShip } from "./InfoShip";
import { PayMeThod } from "./PayMeThod";

export function CheckoutOrder({ showContent, setShowContent, total_price }) {
  return (
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
      {showContent === tabs[0] && <InfoShip setShowContent={setShowContent} />}
      {showContent === tabs[1] && (
        <PayMeThod setShowContent={setShowContent} total_price={total_price} />
      )}
    </div>
  );
}
