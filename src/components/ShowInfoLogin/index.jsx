import React from "react";
import { Success } from "../Alert";

function ShowInfoLogin() {
  const initShowInfoLogin = JSON.parse(
    sessionStorage.getItem("showInfoLogin") || false
  );
  const [showInfoLogin, setShowInfoLogin] = React.useState(false);
  React.useEffect(() => {
    const id1 = setTimeout(() => {
      if (initShowInfoLogin) {
        setShowInfoLogin(initShowInfoLogin);
      }
    }, 700);
    const id = setTimeout(() => {
      sessionStorage.setItem("showInfoLogin", "false");
      setShowInfoLogin(false);
    }, 3000);
    return () => {
      clearTimeout(id);
      clearTimeout(id1);
    };
  }, []);
  return (
    <div className={showInfoLogin ? "alert active-alert" : "alert"}>
      <Success text={"Đăng nhập thành công !"} />
    </div>
  );
}

export default ShowInfoLogin;
