import React, { memo } from "react";
import "./styles.scss";
function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="footer__left col-md-12 col-lg-8">
          <div className="row">
            <div className="footer__contact col-sm-4 col-md-4">
              <div className="footer__contact-top">
                <div className="footer__logo">VLUXURY</div>
                <div className="footer__phone-number">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:0999996789">0999996789</a>
                </div>
                <div className="footer__email">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:vluxury@gmail.com">vluxury@gmail.com</a>
                </div>
              </div>
              <div className="footer__contact-bottom">
                <img
                  src="../assets/image/image_home/dathongbao.png"
                  alt="Ảnh đã thông báo"
                />
              </div>
            </div>
            <div className="footer__support col-sm-4 col-md-4">
              <h3 className="footer__title">HỖ TRỢ KHÁCH HÀNG</h3>
              <ul className="footer__support-list">
                <li className="footer__support-item">
                  <a href="#0"> Hướng dẫn mua hàng online</a>
                </li>
                <li className="footer__support-item">
                  <a href="#0">Hướng dẫn thanh toán</a>
                </li>
                <li className="footer__support-item">
                  <a href="#0"> Tra cứu đơn hàng</a>
                </li>
              </ul>
            </div>
            <div className="footer__policy col-sm-4 col-md-4">
              <h3 className="footer__title">CHÍNH SÁCH</h3>
              <ul className="footer__policy-list">
                <li className="footer__policy-item">
                  <a href="#0">Tìm kiếm </a>
                </li>
                <li className="footer__policy-item">
                  <a href="#0">Giới thiệu </a>
                </li>
                <li className="footer__policy-item">
                  <a href="#0"> Chính sách đổi trả </a>
                </li>
                <li className="footer__policy-item">
                  <a href="#0"> Chính sách bảo mật </a>
                </li>
                <li className="footer__policy-item">
                  <a href="#0">Điều khoản dịch vụ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__right col-md-12 col-lg-4">
          <h3 className="footer__title footer__social-title">
            THEO DÕI VLUXURY TRÊN MẠNG XÃ HỘI
          </h3>
          <div className="footer__icon-social">
            <div className="footer__icon-item">
              <a href="https://www.facebook.com/Vluxury-Th%E1%BB%9Di-trang-nam-100424016029309">
                <i className="fab fa-facebook-f"></i>
              </a>
              <i className="icon-facebook fab fa-facebook-f"></i>
            </div>
            <div className="footer__icon-item">
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
              <i className="icon-instagram fab fa-instagram"></i>
            </div>
            <div className="footer__icon-item">
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube"></i>
              </a>
              <i className="icon-youtube fab fa-youtube"></i>
            </div>
            <div className="footer__icon-item">
              <a href="https://twitter.com/">
                <i className="fab fa-twitter"></i>
              </a>
              <i className="icon-twitter fab fa-twitter"></i>
            </div>
          </div>
          <h3 className="footer__title footer__right-title">
            ĐĂNG KÝ NHẬN THÔNG TIN MỚI TỪ VLUXURY
          </h3>
          <form className="contact-form" action="">
            <div className="input-group">
              <input
                id="footer__email"
                type="email"
                required=""
                name="email"
                placeholder="Nhập email của bạn "
              />
              <input
                className="input-group__btn wow animate__animated animate__bounceIn animate__delay-1s"
                type="submit"
                value="Đăng Kí"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="footer_copyright">Copyrights &copy; 2021 by LUXURY</div>
    </footer>
  );
}

export default memo(Footer);
