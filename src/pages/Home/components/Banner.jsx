import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function totalTimeCurrent() {
  let now = new Date(); // Lấy thời gian hiện tại
  let date = now.getDate(); // Lấy ngày từ thời gian hiện tại
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const totalSeconds = date * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;
  return totalSeconds;
}
function totalTimeEnd(timeCurrent, dateSaleStart, totalDateSale) {
  const totalTime = (dateSaleStart + totalDateSale) * 24 * 3600 - timeCurrent;
  if (totalTime <= 0)
    return {
      date: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  const date = Math.floor(totalTime / (3600 * 24));
  const hours = Math.floor((totalTime - date * 3600 * 24) / 3600);
  const minutes = Math.floor(
    (totalTime - date * 3600 * 24 - hours * 3600) / 60
  );
  const seconds = totalTime - date * 3600 * 24 - hours * 3600 - minutes * 60;
  return {
    date,
    hours,
    minutes,
    seconds,
  };
}
function TimeSale({ DateSaleStart, totalDateSale }) {
  const initTimeSale = totalTimeEnd(totalTimeCurrent(), 29, 2);
  const [timeSale, setTimeSale] = useState(initTimeSale);
  const IdTimeout = useRef();
  useEffect(() => {
    IdTimeout.current = setTimeout(() => {
      setTimeSale(totalTimeEnd(totalTimeCurrent(), 26, 2));
    }, 1000);
    return () => {
      clearTimeout(IdTimeout.current);
    };
  }, [timeSale]);

  return (
    <div className="banner__time">
      <div className="banner__time-header">
        <div className="banner__time-title wow animate__animated animate__fadeInLeft animate__delay-1s">
          TIME SALE
        </div>
        <div className="banner__time-start wow animate__animated animate__fadeInRight animate__delay-1s"></div>
      </div>
      <div className="banner__time-event">
        <div className="banner__event-status wow animate__animated animate__bounceIn animate__delay-1s">
          Kết thúc sau
        </div>
        <div className="banner__time-group wow animate__animated animate__fadeInUp animate__delay-1s">
          <div className="banner__time-date">
            <div className="banner__time-number" id="banner__date">
              {timeSale.date}
            </div>
            <div className="banner__time-name">Ngày</div>
          </div>
          <div className="banner__time-hours">
            <div className="banner__time-number" id="banner__hours">
              {timeSale.hours}
            </div>
            <div className="banner__time-name">Giờ</div>
          </div>
          <div className="banner__time-minute">
            <div className="banner__time-number" id="banner__minutes">
              {timeSale.minutes}
            </div>
            <div className="banner__time-name">Phút</div>
          </div>
          <div className="banner__time-seconds">
            <div className="banner__time-number" id="banner__seconds">
              {timeSale.seconds}
            </div>
            <div className="banner__time-name">Giây</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Banner({ bannerSale }) {
  if (!bannerSale || bannerSale.length == 0) return <></>;
  return (
    <section
      className="banner typeProduct"
      data-type-product="categoryProductSale"
      data-is-sale="true"
    >
      <Link to="/category-product?isSale=true">
        <div className="banner__image">
          <img src={bannerSale[0].image_slider_desktop} alt="image-banner" />
          <img src={bannerSale[0].image_slider_mobile} alt="image-banner" />
        </div>
        <TimeSale />
      </Link>
    </section>
  );
}

export default Banner;
