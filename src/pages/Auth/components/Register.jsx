import React, { useState } from "react";

function NotifyError({ text }) {
  return (
    <div className="notification-error userName-error1">
      <i className="error-icon fas fa-exclamation-circle"></i>
      {text}
    </div>
  );
}
function Register({ setCheckAuth }) {
  const initCheckForm = {
    userName: false,
    password: false,
    confirmPassword: false,
  };
  const [checkForm, setCheckForm] = useState(initCheckForm);
  const [userName, setUerName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = () => {
    if (userName.match(/\w{5,255}/) === null) {
      setCheckForm({ ...checkForm, userName: true });
    }
  };

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
              onChange={(e) => {
                setUerName(e.target.value);
              }}
            />
            {console.log(checkForm.userName)}
            {checkForm.userName && (
              <NotifyError
                text={
                  " Tên tài khoản gồm 5 kí tử trở lên và không có khoảng trắng cũng như các ký tự đặc biệt !"
                }
              />
            )}
          </div>
          <div className="input-password">
            <input
              className="password"
              id="password-resgiter"
              type="password"
              name="password "
              placeholder="Mật khẩu"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="view-icon">
              <i className="far fa-eye-slash"></i>
            </div>
            {checkForm.password && (
              <NotifyError
                text={
                  "Ký tự đầu tiên của mật khẩu phải là một chữ cái, nó phải chứa ít nhất 4 ký tự và không quá 15 ký tự và không được sử dụng các ký tự khác ngoài chữ cái, số và dấu gạch dưới!"
                }
              />
            )}
          </div>
          <div className="input-password-confirm">
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <div className="view-icon-confirm">
              <i className="far fa-eye-slash"></i>
            </div>
            {checkForm.userName && (
              <NotifyError text={"Mật khẩu nhập lại không khớp với nhau !"} />
            )}
          </div>
          <div className="big-btn"></div>
          <div className="btn__bgColor"></div>
          <input
            className="btn btn__register"
            type="button"
            value="ĐĂNG KÍ"
            onClick={handleSubmit}
          />
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
