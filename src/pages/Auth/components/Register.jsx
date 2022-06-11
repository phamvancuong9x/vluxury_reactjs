import React from "react";

function Register({ setCheckAuth }) {
  return (
    <div id="Register">
      <div className="container">
        <div className="container__content"></div>
        <div className="content__title">
          <h1>Đăng Kí</h1>
        </div>
        <form action="">
          <div className="input-userName">
            <input
              className="userName"
              id="userName-resgiter"
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
              <i className="error-icon fas fa-exclamation-circle"></i> Vui
              l&ograve;ng nh&#x1EAD;p 6 k&iacute; t&#x1EF1; tr&#x1EDF;
              l&ecirc;n!
            </div>
          </div>
          <div className="input-password">
            <input
              className="password"
              id="password-resgiter"
              type="password"
              name="password "
              placeholder="Mật khẩu"
            />
            <div className="view-icon">
              <i className="far fa-eye-slash"></i>
            </div>
            <div className="notification-error password-error1">
              <i className="error-icon fas fa-exclamation-circle"></i> Vui
              l&ograve;ng &dstrok;i&#x1EC1;n v&agrave;o tr&#x1B0;&#x1EDD;ng
              n&agrave;y!
            </div>
            <div className="notification-error password-error2">
              <i className="error-icon fas fa-exclamation-circle"></i>Vui
              l&ograve;ng nh&#x1EAD;p 6 k&iacute; t&#x1EF1; tr&#x1EDF;
              l&ecirc;n!
            </div>
          </div>
          <div className="input-password-confirm">
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
            />
            <div className="view-icon-confirm">
              <i className="far fa-eye-slash"></i>
            </div>
            <div className="notification-error confirm-password-error1">
              <i className="error-icon fas fa-exclamation-circle"></i> Vui
              l&ograve;ng &dstrok;i&#x1EC1;n v&agrave;o tr&#x1B0;&#x1EDD;ng
              n&agrave;y!
            </div>
            <div className="notification-error confirm-password-error2">
              <i className="error-icon fas fa-exclamation-circle"></i>
              M&#x1EAD;t kh&#x1EA9;u nh&#x1EAD;p l&#x1EA1;i kh&ocirc;ng
              kh&#x1EDB;p v&#x1EDB;i nhau!
            </div>
          </div>
          <div className="big-btn"></div>
          <div className="btn__bgColor"></div>
          <input className="btn btn__register" type="button" value="ĐĂNG KÍ" />
        </form>

        <div
          className="create-account"
          onClick={() => setCheckAuth("Đăng Nhập")}
        >
          <span className="link-convert-html pagesLogIn-link">Đăng Nhập</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
