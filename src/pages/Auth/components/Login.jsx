import React, { useEffect, useState } from "react";
import accountApi from "../../../api/userApi";
import { NotifyError } from "./NotifyError";

import SignInGoogleFaceBook from "./SignInGoogleFacebook";
import { ViewPassWord } from "./ViewPassWord";

export function isCheckAccount(accountList, userName, password) {
  const account = accountList.filter((accountItem) => {
    return accountItem.name === userName && accountItem.password === password;
  });

  if (account.length === 0) {
    return { checkAccount: false, account };
  }
  return { checkAccount: true, account };
}
export function isCheckUserNamePassWord(accountList, userName, password) {
  const isUserName = accountList.filter((accountItem) => {
    return accountItem.name === userName;
  });
  const isPassWord = accountList.filter((accountItem) => {
    return accountItem.password === password;
  });

  if (isUserName.length !== 0 && isPassWord.length === 0) {
    return { isUserName: true, isPassWord: false };
  } else if (isUserName.length === 0 && isPassWord.length !== 0) {
    return { isUserName: false, isPassWord: true };
  }
  return { isUserName: false, isPassWord: false };
}
function Login({ checkLogin, setCheckAuth, setCheckLogin }) {
  const [viewPassWord, setViewPassWord] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkSubmitLogIn, setCheckSubmitLogin] = useState(false);
  const [checkAccountAdmin, setCheckAccountAdmin] = useState(false);
  const [checkAccount, setCheckAccount] = useState({
    isUserName: true,
    isPassWord: true,
  });
  useEffect(() => {
    const id = setTimeout(() => {
      setCheckAccount({
        isUserName: true,
        isPassWord: true,
      });
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [checkAccount]);
  const handleLogin = () => {
    setCheckSubmitLogin(true);
    (async () => {
      const accountList = await accountApi.getAll();
      const isCheckLogin = isCheckAccount(
        accountList,
        userName,
        password
      ).checkAccount;
      const account = isCheckAccount(accountList, userName, password).account;

      if (isCheckLogin && account[0].name === "admin") {
        sessionStorage.setItem("admin", "true");
        window.location.assign("/admin");
        return;
      }
      setCheckLogin(!isCheckLogin);
      if (!isCheckLogin) {
        setCheckAccount(
          isCheckUserNamePassWord(accountList, userName, password)
        );
      }

      if (isCheckLogin) {
        const accounts = isCheckAccount(accountList, userName, password)
          .account[0];

        sessionStorage.setItem("stateLogin", true);
        localStorage.setItem("cart", "[]");
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
              className={
                checkAccount.isUserName
                  ? "userName"
                  : "userName error_input_border"
              }
              id="userName-login"
              type="text"
              name="userName"
              placeholder="Tên tài khoản"
              onChange={(e) => setUserName(e.target.value)}
            />

            {!checkAccount?.isUserName && checkSubmitLogIn && (
              <NotifyError text={"Tài khoản nhập vào không đúng !"} />
            )}
          </div>
          <div className="input-password">
            <input
              className={
                checkAccount.isPassWord
                  ? "password"
                  : "password error_input_border"
              }
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
            {!checkAccount?.isPassWord && checkSubmitLogIn && (
              <NotifyError text={"Mật khẩu nhập vào không đúng!"} />
            )}
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
