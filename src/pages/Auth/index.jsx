import React, { useEffect, useRef, useState } from "react";
import { Error, Success } from "../../components/Alert";
import Breadcrumbs from "../../components/Breadcrumbs";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles.scss";

function Auth() {
  const [checkAuth, setCheckAuth] = useState("Đăng Nhập");
  const [checkRegister, setCheckRegister] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);
  const switchPageRef = useRef();
  switchPageRef.current = sessionStorage.getItem("switchPage") || "null";
  const [switchPage, setSwitchPage] = useState(switchPageRef.current);
  useEffect(() => {
    const id = setTimeout(() => {
      setCheckRegister(false);
      setCheckLogin(false);
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [checkRegister, checkLogin]);

  return (
    <>
      <Breadcrumbs title={checkAuth} />
      {checkAuth === "Đăng Nhập" && (
        <Login
          setCheckAuth={setCheckAuth}
          setCheckLogin={setCheckLogin}
          checkLogin={checkLogin}
          switchPage={switchPage}
        />
      )}

      {checkAuth === "Đăng Kí" && (
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
