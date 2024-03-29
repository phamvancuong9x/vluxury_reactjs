import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import "./styles.scss";

function Map() {
  return (
    <>
      <Breadcrumbs title={"HỆ THỐNG CỬA HÀNG"} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=12hwJDNvLEDIGGwvYVM3jHMqJkDGDmnNH&ehbc=2E312F"
                width="100%"
                height="380px"
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="shop-address">
              <h1 className="shop-address">HỆ THỐNG CỬA HÀNG</h1>
              <ul className="shop-address__list">
                <li>1, Vluxury Chùa Bộc: Số 19, Chùa Bộc, Đống Đa, Hà Nội</li>
                <li>2, Vluxury Cầu Giấy: Số 330 Cầu Giấy, Cầu Giấy, Hà Nội</li>
                <li>
                  3, Vluxury Cầu Giấy 2: 213 Cầu Giấy, Dịch Vọng, Cầu giấy, Hà
                  Nội
                </li>
                <li>4, Vluxury Phố Huế: 351 Phố Huế, Hai Bà Trưng, Hà Nội</li>
                <li>
                  5, Vluxury Trần Phú: Số 53 Trần Phú, P.Văn Quán, Q.Hà Đông,
                  TP.Hà Nội
                </li>
                <li>
                  6, Vluxury Nguyễn Văn Cừ: Số 211 Nguyễn Văn Cừ, Long Biên, Hà
                  Nội
                </li>
                <li>
                  7, Vluxury Quang Trung - Hà Đông: Số 405 Quang Trung, Hà Đông,
                  Hà Nội
                </li>
                <li>
                  8, Vluxury Chúc Sơn: Số 7 Bắc Sơn, TT Chúc Sơn, Chương Mỹ, Hà
                  Nội
                </li>
                <li>9, Vluxury Đông Anh: Số 244 Cao Lỗ, Đông Anh, Hà Nội</li>
                <li>
                  10, Vluxury Sơn Tây: 263 Quang Trung - tx Sơn Tây (Gần ngã ba
                  Quang Trung sang Cầu Trì)
                </li>
                <li>
                  11,Vluxury Lê Văn SỸ: 370 Lê Văn Sỹ, Phường 14, Quận 3,Thành
                  phố Hồ Chí Minh
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
