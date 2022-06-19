import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { config } from "../../../pages/Auth/components/SignInGoogleFacebook";
import authSlice from "../../../redux/slice/authSlice";
firebase.initializeApp(config);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
    console.log(uid);
  } else {
    // User is signed out
    // ...
  }
});

export function HeaderUser({ text }) {
  const UserInfo = useSelector((state) => state.users);
  const imageUser = UserInfo?.imageUser;
  const nameUser = UserInfo?.nameUser;
  const stateLogin = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const handleLogout = () => {
    firebase.auth().signOut();
    const action = authSlice.actions.login(false);
    dispatch(action);
    sessionStorage.setItem("stateLogin", "false");
    sessionStorage.setItem("userInfo", null);
    localStorage.setItem("cart", "[]");
    setTimeout(() => {
      window.location.replace("/login");
    }, 650);
  };
  return (
    <>
      {!stateLogin && (
        <li className="nav__right-item nav__header-user">
          <Link className="user-login" to="/login">
            <i className="fas fa-user"></i>
            {text && <span style={{ marginLeft: "10px" }}>{text}</span>}
          </Link>
        </li>
      )}
      {stateLogin && (
        <li className="header__user">
          <div className="header__user-info">
            <div className="header__user-image">
              <img
                src={imageUser || "../assets/image/image_home/anhdaidien.jpg"}
                alt="user_image"
              />
            </div>
          </div>
          <ul className="header__user-list">
            <li
              style={{ paddingBottom: "5px", borderBottom: "1px solid #ccc" }}
            >
              <div className="header__user-name"> {nameUser}</div>
            </li>
            <li className="header__user-item">
              <Link to="/info-user">
                <span>Tài khoản của tôi</span>
              </Link>
            </li>
            <li
              className="header__user-item header__user-logout"
              onClick={handleLogout}
            >
              <span>Đăng xuất</span>
            </li>
          </ul>
        </li>
      )}
    </>
  );
}
