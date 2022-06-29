import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowInfoLogin from "../../../components/ShowInfoLogin";
import adminSlice from "../../../redux/slice/adminSlice";

function HeaderAdmin() {
  const db = getDatabase();
  const quantityOrder = useSelector((state) => state.admin.newOrderQuantity);
  const [showNotify, setShowNotify] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    onValue(ref(db, "order/"), (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      dispatch(
        adminSlice.actions.changeQuantityOrder(Object.values(data)?.length)
      );
    });
  }, []);

  const handleClick = () => {
    sessionStorage.setItem("admin", "false");
    setTimeout(() => {
      window.location.replace("/login");
    }, 300);
  };
  const handleShowNotiFy = () => {
    setShowNotify(!showNotify);
  };
  return (
    <nav className="header-admin">
      <p>
        Xin chào <span>Admin</span>
      </p>
      <div>
        <span className="notify_admin">
          <div className="notify_icon" onClick={handleShowNotiFy}>
            <i className="fa-solid fa-bell"></i>
          </div>
          {quantityOrder !== 0 && <span className="notify_show"></span>}
          <div
            className={
              (showNotify && "menu_notify menu-notify-show ") || "menu_notify "
            }
            onClick={(e) => e.stopPropagation()}
          >
            <p>Thông báo mới nhận</p>
            <ul className="notify-menu">
              {(quantityOrder !== 0 && (
                <li className="notify-item">
                  Bạn có
                  <span className="notify_quantity">{quantityOrder}</span>
                  đơn hàng mới !
                </li>
              )) || <li className="notify-item">Không có thông báo mới !</li>}
            </ul>
          </div>
        </span>
        <span className="btn_log-out" onClick={handleClick}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </span>
      </div>
      <ShowInfoLogin />
    </nav>
  );
}

export default HeaderAdmin;
