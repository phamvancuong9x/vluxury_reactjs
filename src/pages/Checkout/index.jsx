import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAllProduct } from "../../actions/addToCart";
import { setInfoShip } from "../../actions/infoShip";
import provincesApi from "../../api/provincesApi";
import {
  stringToNumberMoney,
  totalPrice,
} from "../Cart/components/handleFunction";
import "./styles.scss";

function InfoShip({ setShowContent }) {
  const ckeckLogin = sessionStorage.getItem("");
  const [provincesList, setProvincesList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [wardsList, setWardsList] = useState([]);
  const [districtParams, setDistrictParams] = useState();
  const [wardsParams, setWardsParams] = useState();
  const infoShip = useSelector((state) => state.infoShips);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const provincesList = await provincesApi.getAll("/?depth=1");
        setProvincesList(provincesList);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    setDistrictList([]);
    setWardsList([]);
    if (!districtParams) return;
    (async () => {
      try {
        const DistrictList = await provincesApi.getAll(
          `p/${districtParams}?depth=2`
        );
        setDistrictList(DistrictList.districts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [districtParams]);
  useEffect(() => {
    setWardsList([]);

    if (!districtParams || !wardsParams || wardsParams == "default") return;
    (async () => {
      try {
        const WardsList = await provincesApi.getAll(`d/${wardsParams}?depth=2`);
        setWardsList(WardsList.wards);
      } catch (error) {}
    })();
  }, [wardsParams]);

  const handleGetProvinces = (e) => {
    setDistrictParams(e.target.value);
  };

  return (
    <section className="info-ship">
      <div className="info-ship__title"> Thông tin vận chuyển</div>
      {ckeckLogin && (
        <div className="linkToLoginPage">
          Bạn đã có tài khoản?
          <Link to="/login" title="title">
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
          onChange={(e) => dispatch(setInfoShip({ nameUser: e.target.value }))}
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
                  dispatch(setInfoShip({ email: e.target.value }))
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
                  dispatch(setInfoShip({ phone: e.target.value }))
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
            onChange={(e) => dispatch(setInfoShip({ address: e.target.value }))}
          />
        </div>
        <div className="info-ship__address">
          <div className="row">
            <div className="col-12 col-sm-4">
              <select
                className="provinces"
                onChange={(e) => handleGetProvinces(e)}
              >
                <option value="default"> Chọn Tỉnh Thành</option>
                {provincesList?.map((province, i) => {
                  return (
                    <option value={province.code} key={i}>
                      {" "}
                      {province.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-12 col-sm-4">
              <select
                className="district"
                onChange={(e) => setWardsParams(e.target.value)}
              >
                <option value="default"> Chọn Quận/Huyện</option>
                {districtList?.map((district, i) => {
                  return (
                    <option value={district.code} key={i}>
                      {" "}
                      {district.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-12 col-sm-4">
              <select className="wards">
                <option value="default"> Chọn Xã </option>
                {wardsList?.map((wards, i) => {
                  return (
                    <option value={wards.code} key={i}>
                      {" "}
                      {wards.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
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

function InputMethod({ payMethod, defaultChecked }) {
  const dispatch = useDispatch();
  if (defaultChecked) {
    return (
      <input
        type="radio"
        name="pay"
        value={payMethod?.nameMethod}
        defaultChecked
        onChange={(e) => dispatch(setInfoShip({ payMethod: e.target.value }))}
      />
    );
  }
  return (
    <input
      type="radio"
      name="pay"
      value={payMethod?.nameMethod}
      onChange={(e) => dispatch(setInfoShip({ payMethod: e.target.value }))}
    />
  );
}
function PayMeThod({ setShowContent, total_price }) {
  const dispatch = useDispatch();
  const payMethodArray = [
    {
      icon: "assets/image/image_product-detail/icon/cod.svg",
      nameMethod: "Thanh toán khi giao hàng (COD)",
      defaultChecked: true,
    },
    {
      icon: "assets/image/image_product-detail/icon/other.svg",
      nameMethod: "Chuyển khoản qua ngân hàng",
      defaultChecked: false,
    },
    {
      icon: "assets/image/image_product-detail/icon/vnpay_new.svg",
      nameMethod: "Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY",
      defaultChecked: false,
    },
    {
      icon: "assets/image/image_product-detail/icon/grabmoca.svg",
      nameMethod: "Ví Moca trên ứng dụng Grab",
      defaultChecked: false,
    },
    {
      icon: "assets/image/image_product-detail/icon/momo.svg",
      nameMethod: "Ví Momo",
      defaultChecked: false,
    },
    {
      icon: "assets/image/image_product-detail/icon/shopeepay_new.svg",
      nameMethod: "Ví ShopeePay",
      defaultChecked: false,
    },
  ];

  const handleBuyProduct = () => {
    dispatch(setInfoShip({ totalPrice: total_price }));
    const action = deleteAllProduct();
    dispatch(action);
    setShowContent("modalActive");
    localStorage.setItem("cart", "[]");
  };
  return (
    <section className="payment-methods">
      <div className="payment-methods__title">Phương thức thanh toán</div>
      <ul>
        {payMethodArray.map((payMethod, i) => {
          return (
            <li key={i}>
              <label>
                {payMethod.defaultChecked ? (
                  <InputMethod
                    payMethod={payMethod}
                    defaultChecked={payMethod.defaultChecked}
                  />
                ) : (
                  <InputMethod payMethod={payMethod} />
                )}
                <img src={payMethod.icon} alt="Ảnh icon" />
                <div className="pay-name">{payMethod.nameMethod}</div>
              </label>
            </li>
          );
        })}
      </ul>
      <div className="payment-methods__footer">
        <div className="step-prev" onClick={() => setShowContent("infoShip")}>
          Trở lại thông tin vận chuyển
        </div>
        <div className="payment-methods__btn-buy" onClick={handleBuyProduct}>
          Đặt hàng
        </div>
      </div>
    </section>
  );
}

function ModalOrder({ showContent }) {
  const NumberCode = Math.floor(Math.random() * 10000);
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
                    <span className="number-code-orders">
                      {`#${NumberCode}`}
                    </span>
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
                  {/* <div className="changePageHome">
                    <span>
                      Chuyển về trang chủ:
                      <span className="changePageHome__time">12 </span>
                      <span>s</span>
                      <span className="cancel">Cancel</span>
                    </span>
                  </div> */}
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
function ProductInfo({ product }) {
  return (
    <div className="row">
      <div className="col-2 image-container">
        <div className="image">
          <img src={product.image} alt={product.nameProduct} />
        </div>
        <div className="product_quantity">{product.quantity}</div>
      </div>
      <div className="col-6 info-product">
        <div className="product__name">{product.nameProduct}</div>
        <div className="product__size">{product.size}</div>
      </div>
      <div className="col-3 info-price">
        <div className="product__price">{product.price_product}</div>
      </div>
    </div>
  );
}
function Checkout() {
  const tabs = ["infoShip", "payMethod", "modalActive"];
  const [showContent, setShowContent] = useState(tabs[0]);
  const ProductListCart = useSelector((state) => state.add_cart);
  const total_price = stringToNumberMoney(totalPrice(ProductListCart));
  return (
    <div className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <section className="information-order">
              <a href="index.html" title="title">
                <h2 className="information-order-title">
                  VLUXURY - THỜI TRANG DÀNH CHO PHÁI MẠNH
                </h2>
              </a>
              <div className="toggle-product-cart">
                <i className="fas fa-shopping-cart"></i>
                <div className="toggle-product-cart__text">
                  <div className="toggle-product-cart__show">
                    Hiện Thông tin đơn hàng
                  </div>
                  <div className="toggle-product-cart__hide">
                    Ẩn Thông tin đơn hàng
                  </div>
                </div>
              </div>
              <div className="product-list">
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
