import React, { useEffect, useState } from "react";
import { Error, Success } from "../../components/Alert";
import Breadcrumbs from "../../components/Breadcrumbs";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles.scss";

function Auth() {
  const [checkAuth, setCheckAuth] = useState("Đăng Nhập");
  const [checkRegister, setCheckRegister] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);
  console.log(checkRegister);
  useEffect(() => {
    setTimeout(() => {
      setCheckRegister(false);
    }, 3000);
  }, [checkRegister]);

  return (
    <>
      <Breadcrumbs title={checkAuth} />
      {checkAuth == "Đăng Nhập" && (
        <Login setCheckAuth={setCheckAuth} setCheckLogin={setCheckLogin} />
      )}

      {checkAuth == "Đăng Kí" && (
        <Register
          setCheckAuth={setCheckAuth}
          setCheckRegister={setCheckRegister}
        />
      )}
      <div className={checkRegister ? "alert active-alert" : "alert"}>
        <Success text="Đăng kí thành công !" />
      </div>
      <div className={checkLogin ? "alert active-alert" : "alert"}>
        <Error text="Đăng nhập thất bại  !" />
      </div>
    </>
  );
}

export default Auth;
