import React, { memo } from "react";
import Slider from "react-slick";

function HeaderSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider-header">
      <div className="slider-header__item">
        <Slider {...settings}>
          <div>
            <p className="slider-header__text">
              {" "}
              Chào mừng quý khách đến với VLUXURY
            </p>
          </div>
          <div>
            <p className="slider-header__text">Free ship từ đơn hàng 500k</p>
          </div>
          <div>
            <p className="slider-header__text">
              Nhập mã
              <span
                className="margin-left-right-5"
                style={{ color: " rgb(252, 101, 0)" }}
              >
                D1AFAC
              </span>
              giảm ngay 5% đơn hàng
            </p>
          </div>
          <div>
            <p className="slider-header__text">Free ship từ 500k</p>
          </div>
          <div>
            <p className="slider-header__text">Hỗ trợ 24/7</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default memo(HeaderSlider);
