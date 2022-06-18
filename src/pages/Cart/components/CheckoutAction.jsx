import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Success } from "../../../components/Alert";
import { LoadingBtn } from "../../../components/Loading";
import { stringToNumberMoney, totalPrice } from "./handleFunction";

export function CheckoutAction({ ProductCartList }) {
  const [loadingBtn, setLoading] = useState(false);
  const [showNotifyUpdate, setShowNotifyUpdate] = useState(false);
  const total_price = stringToNumberMoney(totalPrice(ProductCartList));
  useEffect(() => {
    const id1 = setTimeout(() => {
      setShowNotifyUpdate(false);
    }, 2000);
    return () => {
      clearTimeout(id1);
    };
  }, [showNotifyUpdate]);

  const handleUpdateCart = () => {
    setLoading(true);
    setShowNotifyUpdate(false);
    setTimeout(() => {
      setLoading(false);
      setShowNotifyUpdate(true);
    }, 700);
    localStorage.setItem("cart", JSON.stringify(ProductCartList));
  };
  return (
    <div className="row modal__checkout-actions">
      <div className="col-12 col-md-6">
        <div className="modal__cart-note">
          <textarea
            className="textarea-note"
            name=""
            placeholder="Ghi chú"
          ></textarea>
        </div>
      </div>
      <div className="col-12 col-md-6 modal__checkout-actions-right">
        <h3 className="modal__total-money">{`Tổng : ${total_price}`}</h3>
        <div className="modal__btn-checkout">
          {loadingBtn && (
            <div className="btn-loading-cart">
              <LoadingBtn />
            </div>
          )}
          {!loadingBtn && (
            <div className="btn-update-to-cart" onClick={handleUpdateCart}>
              Cập nhật giỏ hàng
            </div>
          )}
          <Link className="btn-buys btn-save-info" to="/checkout">
            Tiến hành thanh toán
          </Link>
        </div>
      </div>
      <div className={showNotifyUpdate ? "alert active-alert" : "alert"}>
        <Success text={"Cập nhật thành công !"} />
      </div>
    </div>
  );
}
