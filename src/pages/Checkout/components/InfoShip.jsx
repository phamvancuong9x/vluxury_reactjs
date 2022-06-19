import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import infoShipSlice from "../../../redux/slice/infoShipSlice";
import { InfoShipAddressSelect } from "./InfoShipAddressSelect";

export function InfoShip({ setShowContent }) {
  const ckeckLogin = JSON.parse(sessionStorage.getItem("stateLogin") || false);
  const infoShip = useSelector((state) => state.infoShips);

  const handleClick = () => {
    sessionStorage.setItem("switchPage", "checkout");
  };
  const dispatch = useDispatch();

  return (
    <section className="info-ship">
      <div className="info-ship__title"> Thông tin vận chuyển</div>
      {!ckeckLogin && (
        <div className="linkToLoginPage">
          Bạn đã có tài khoản?
          <Link
            to="/login"
            className="link-login-checkout"
            title="title"
            onClick={handleClick}
          >
            Đăng nhập
          </Link>
        </div>
      )}
      <div className="info-ship__input">
        <input
          type="text"
          value={infoShip.nameUser}
          placeholder="Họ và tên"
          id="name"
          onChange={(e) =>
            dispatch(
              infoShipSlice.actions.changeInfoShip({ nameUser: e.target.value })
            )
          }
        />
        <div className="info-contact">
          <div className="row">
            <div className="col-12 col-sm-8">
              <input
                type="email"
                name="email"
                value={infoShip.email}
                id="email"
                placeholder="Email"
                required
                onChange={(e) =>
                  dispatch(
                    infoShipSlice.actions.changeInfoShip({
                      email: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div className="col-12 col-sm-4">
              <input
                name="phone-number"
                id="phone-number"
                placeholder="Điện thoại"
                required
                maxLength="15"
                value={infoShip.phone}
                onChange={(e) =>
                  dispatch(
                    infoShipSlice.actions.changeInfoShip({
                      phone: e.target.value,
                    })
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="info-ship__address">
          <input
            type="text"
            value={infoShip.address}
            placeholder="Địa chỉ"
            id="address"
            onChange={(e) =>
              dispatch(
                infoShipSlice.actions.changeInfoShip({
                  address: e.target.value,
                })
              )
            }
          />
        </div>
        <InfoShipAddressSelect />
      </div>
      <div className="info-ship__footer">
        <Link to="/cart" title="title">
          Giỏ hàng
        </Link>
        <div
          className="info-ship__footer-btn"
          onClick={() => setShowContent("payMethod")}
        >
          Phương thức thanh toán
        </div>
      </div>
    </section>
  );
}
