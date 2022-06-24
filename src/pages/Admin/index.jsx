import { Link } from "react-router-dom";
import AdminContent from "./components/AdminContent";
import HeaderAdmin from "./components/HeaderAdmin";
import "./styles.scss";
function Admin() {
  const isCheckAdmin = JSON.parse(sessionStorage.getItem("admin") || false);

  return (
    <>
      {!isCheckAdmin && (
        <h5 className="Info_login">
          Vui lòng đăng nhập bằng tài khoản admin !
          <br />
          <Link className="btn_login" to={"/login"}>
            ĐĂNG NHẬP
          </Link>
        </h5>
      )}
      {isCheckAdmin && (
        <>
          <HeaderAdmin />
          <AdminContent />
        </>
      )}
    </>
  );
}

export default Admin;
