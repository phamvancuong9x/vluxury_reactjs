import React from "react";
import { Link } from "react-router-dom";

function MapHome() {
  return (
    <section id="home-shop-map">
      <div className="home-shop-map__title">TÌM CỬA HÀNG GẦN BẠN NHẤT</div>
      <Link
        to={"/map"}
        className="home-shop-map__btn bttn wow animate__animated animate__bounceIn animate__delay-1s"
      >
        HỆ THỐNG CỬA HÀNG
      </Link>
    </section>
  );
}

export default MapHome;
