import { Link } from "react-router-dom";
import { stringToNumberMoney, totalPrice } from "./handleFunction";

export function CheckoutAction({ ProductCartList }) {
  const total_price = stringToNumberMoney(totalPrice(ProductCartList));

  const handleUpdateCart = () => {
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
          <div className="btn-update-to-cart" onClick={handleUpdateCart}>
            Cập nhật giỏ hàng
          </div>
          <Link className="btn-buys btn-save-info" to="/checkout">
            Tiến hành thanh toán
          </Link>
        </div>
      </div>
    </div>
  );
}
