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
        <form action="">
          <div className="input-userName">
            <input
              className="userName"
              id="userName-login"
              type="text"
              name="userName"
              placeholder="Tên tài khoản"
            />
            <div className="notification-error userName-error1">
              <i className="error-icon fas fa-exclamation-circle"></i> Vui
              l&ograve;ng &dstrok;i&#x1EC1;n v&agrave;o tr&#x1B0;&#x1EDD;ng
              n&agrave;y!
            </div>
            <div className="notification-error userName-error2">
              <i className="error-icon fas fa-exclamation-circle"></i>Vui
              l&ograve;ng nh&#x1EAD;p 6 k&iacute; t&#x1EF1; tr&#x1EDF;
              l&ecirc;n!
            </div>
            <div className="notification-error userName-error3">
              <i className="error-icon fas fa-exclamation-circle"></i>
              <p>
                {" "}
                T&ecirc;n &dstrok;&abreve;ng nh&#x1EAD;p kh&ocirc;ng
                &dstrok;&uacute;ng !
              </p>
            </div>
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
            <div className="notification-error password-error1">
              <i className="error-icon fas fa-exclamation-circle"></i> Vui
              l&ograve;ng &dstrok;i&#x1EC1;n v&agrave;o tr&#x1B0;&#x1EDD;ng
              n&agrave;y
            </div>
            <div className="notification-error password-error2">
              <i className="error-icon fas fa-exclamation-circle"></i>Vui
              l&ograve;ng nh&#x1EAD;p 6 k&iacute; t&#x1EF1; tr&#x1EDF; l&ecirc;n
            </div>
            <div className="notification-error password-error3">
              <i className="error-icon fas fa-exclamation-circle"></i>
              <p>M&#x1EAD;t kh&#x1EA9;u kh&ocirc;ng &dstrok;&uacute;ng !</p>
            </div>
          </div>
          <a className="forget-password" href="#0">
            {" "}
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
