import React from "react";
import SignInGoogleFaceBook from "./SignInGoogleFacebook";

function Login({ setCheckAuth }) {
  return (
    <div id="login">
      <div className="container">
        <div className="container__content"></div>
        <div className="content__title">
          <h1>Đăng Nhập</h1>
        </div>
        <form>
          <div className="input-userName">
            <input
              className="userName"
              id="userName-login"
              type="text"
              name="userName"
              placeholder="Tên tài khoản"
            />
          </div>
          <div className="input-password">
            <input
              className="password"
              id="password-login"
              type="password"
              name="password "
              placeholder="Mật khẩu "
            />
            <div className="view-icon">
              <i className="far fa-eye-slash"></i>
            </div>
          </div>
          <a className="forget-password" href="#0">
            Quên mật khẩu ?
          </a>
          <div className="big-btn"></div>
          <div className="btn__bgColor"></div>
          <a className="link-home-input" href="#">
            <input className="btn btn__login" type="button" value="ĐĂNG NHẬP" />
          </a>
        </form>
        <div className="social__container">
          <SignInGoogleFaceBook />
        </div>
        <div className="create-account" onClick={() => setCheckAuth("Đăng Kí")}>
          <span className="link-convert-html create-account-link">Đăng kí</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
