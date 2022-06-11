import React, { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles.scss";

function Auth() {
  const [checkAuth, setCheckAuth] = useState("Đăng Nhập");
  return (
    <>
      <Breadcrumbs title={checkAuth} />
      {checkAuth == "Đăng Nhập" && <Login setCheckAuth={setCheckAuth} />}

      {checkAuth == "Đăng Kí" && <Register setCheckAuth={setCheckAuth} />}
    </>
  );
}

export default Auth;
