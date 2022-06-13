import React, { useEffect, useState } from "react";
import accountApi from "../../../api/userApi";
import { ViewPassWord } from "./Register";
import SignInGoogleFaceBook from "./SignInGoogleFacebook";

export function isCheckAccount(accountList, userName, password) {
  const account = accountList.filter((accountItem) => {
    return accountItem.name === userName && accountItem.password === password;
  });

  if (account.length === 0) {
    return { checkAccount: false, account };
  }
  return { checkAccount: true, account };
}
function Login({ setCheckAuth, setCheckLogin }) {
  const [viewPassWord, setViewPassWord] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    (async () => {
      const accountList = await accountApi.getAll();

      setCheckLogin(!isCheckAccount(accountList, userName, password));
      if (isCheckAccount(accountList, userName, password).checkAccount) {
        const accounts = isCheckAccount(accountList, userName, password)
          .account[0];

        sessionStorage.setItem("stateLogin", true);
        const userInfo = {
          id: accounts.id,
          nameUser: accounts.name,
          email: accounts.email,
        };
        sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
        window.location.assign("/");
      }
    })();
  };
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
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-password">
            <input
              className="password"
              id="password-login"
              type={viewPassWord ? "password" : "text"}
              name="password "
              placeholder="Mật khẩu "
              onChange={(e) => setPassword(e.target.value)}
            />
            <ViewPassWord
              viewPassWord={viewPassWord}
              setViewPassWord={setViewPassWord}
            />
          </div>
          <a className="forget-password" href="#0">
            Quên mật khẩu ?
          </a>
          <div className="big-btn"></div>
          <div className="btn__bgColor"></div>
          <a className="link-home-input" href="#">
            <input
              className="btn btn__login"
              type="button"
              value="ĐĂNG NHẬP"
              onClick={handleLogin}
            />
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
