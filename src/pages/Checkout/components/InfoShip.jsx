import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import infoShipSlice from "../../../redux/slice/infoShipSlice";
import { InfoShipAddressSelect } from "./InfoShipAddressSelect";

// function InputInFoShip() {
//   return;
// }
export function InfoShip({ setShowContent }) {
  const ckeckLogin = JSON.parse(sessionStorage.getItem("stateLogin") || false);
  const infoShip = useSelector((state) => state.infoShips);
  const [values, setValues] = useState({
    nameUser: infoShip.nameUser || "",
    email: infoShip.email || "",
    phone: infoShip.phone || "",
    address: infoShip.address || "",
  });

  const [checkValues, setCheckValues] = useState({
    checkNameUser: false,
    checkEmail: false,
    CheckPhone: false,
    checkAddress: false,
  });
  const [checkSubmit, setCheckSubmit] = useState(false);

  const handleClick = () => {
    sessionStorage.setItem("switchPage", "checkout");
  };
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlePayMethod = () => {
    setCheckSubmit(true);
    const newCheckValue = {
      checkNameUser: values.nameUser?.trim() !== "",
      checkEmail:
        values.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) !== null,
      checkPhone: values.phone.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/) != null,
      checkAddress: values.address?.trim() !== "",
    };
    setCheckValues(newCheckValue);
    if (
      Object.values(newCheckValue).some((data) => {
        return data === false;
      })
    ) {
      return;
    }
    setShowContent("payMethod");
    dispatch(infoShipSlice.actions.changeInfoShip(values));
  };
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
      <div className="info-ship__input ">
        <div className="input_field">
          <input
            type="text"
            className={
              checkSubmit && !checkValues.checkNameUser && "error_input_border"
            }
            name="nameUser"
            value={values.nameUser}
            placeholder="Họ và tên"
            id="name"
            onChange={handleChange}
          />
          {checkSubmit && !checkValues.checkNameUser && (
            <p className="checkout-error">Vui lòng nhập họ tên ! </p>
          )}
        </div>
        <div className="info-contact">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="input_field">
                <input
                  className={
                    checkSubmit &&
                    !checkValues.checkEmail &&
                    "error_input_border"
                  }
                  type="email"
                  name="email"
                  value={values.email}
                  id="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
                {checkSubmit && !checkValues.checkEmail && (
                  <p className="checkout-error">
                    Vui lòng nhập đúng địa chỉ email !
                  </p>
                )}
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="input_field">
                <input
                  name="phone"
                  className={
                    checkSubmit &&
                    !checkValues.checkPhone &&
                    "error_input_border"
                  }
                  id="phone-number"
                  placeholder="Điện thoại"
                  required
                  maxLength="15"
                  value={values.phone}
                  onChange={handleChange}
                />
                {checkSubmit && !checkValues.checkPhone && (
                  <p className="checkout-error">
                    Vui lòng nhập đúng số điện thoại !{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="info-ship__address">
          <div className="input_field">
            <input
              type="text"
              className={
                checkSubmit && !checkValues.checkAddress && "error_input_border"
              }
              value={values.address}
              placeholder="Địa chỉ"
              id="address"
              name="address"
              onChange={handleChange}
            />{" "}
            {checkSubmit && !checkValues.checkAddress && (
              <p className="checkout-error">Vui lòng nhập địa chỉ ! </p>
            )}
          </div>
        </div>
        <InfoShipAddressSelect />
      </div>
      <div className="info-ship__footer">
        <Link to="/cart" className="switch_to_cart" title="title">
          Giỏ hàng
        </Link>
        <div className="info-ship__footer-btn" onClick={handlePayMethod}>
          Phương thức thanh toán
        </div>
      </div>
    </section>
  );
}
