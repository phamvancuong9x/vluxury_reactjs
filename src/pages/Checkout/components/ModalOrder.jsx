import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function ModalOrder({ showContent }) {
  const infoShip = useSelector((state) => state.infoShips);
  return (
    <div
      className={showContent == "modalActive" ? "modal active-modal" : "modal"}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-10 col-sm-9 col-11">
            <div className="modal__container">
              <div className="modal__header">
                <h3>VLUXURY - THỜI TRANG DÀNH CHO PHÁI MẠNH</h3>
              </div>
              <div className="modal__code-orders">
                <div className="modal__icon">
                  <i className="far fa-check-circle"></i>
                </div>
                <div className="modal__code-orders-text">
                  <p>Đặt hàng thành công</p>
                  <p>
                    Mã đơn hàng :
                    <span className="number-code-orders">{infoShip.id}</span>
                  </p>
                  <p>Cám ơn bạn đã mua hàng!</p>
                </div>
              </div>
              <div className="modal__info-order">
                <div className="modal__info-order-title">
                  Thông tin đơn hàng
                </div>

                <div className="modal__name">
                  {`Tên : ${infoShip?.nameUser}`}
                </div>
                <div className="modal__number-phone">
                  {`Số điện thoại : ${infoShip.phone}`}
                </div>
                <div className="modal__address">
                  <p>{`Địa chỉ : ${infoShip.address}`}</p>
                </div>
                <div className="totalPrice">
                  Tổng tiền :<strong>{infoShip.totalPrice}</strong>
                </div>
                <div className="modal__shipping">
                  <span className="modal__shipping-title">
                    Phương thức thanh toán
                  </span>
                  <div className="modal__shipping-method">
                    {infoShip.payMethod}
                  </div>
                </div>
              </div>
              <div className="modal__step-footer">
                <div className="modal__step-footer__left">
                  <div className="modal__support">
                    <i className="fas fa-question-circle"></i>
                    <span>Cần hỗ trợ?</span>
                    <a href="tel:0999996789">Liên hệ</a>
                  </div>
                </div>
                <Link className="modal__continue-buyProduct-btn " to="/">
                  Tiếp tục mua hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
