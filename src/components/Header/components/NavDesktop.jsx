import firebase from "firebase/compat/app";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from "../../../actions/auth";
import { config } from "../../../pages/Auth/components/SignInGoogleFacebook";
import { productSubMenu } from "./productSubMenu";

firebase.initializeApp(config);

function HeaderUser() {
  const UserInfo = useSelector((state) => state.users);
  const imageUser = UserInfo.imageUser;
  const nameUser = UserInfo.nameUser;
  const stateLogin = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const handleLogout = () => {
    sessionStorage.setItem("stateLogin", "false");
    const action = setAuth(false);
    dispatch(action);
    firebase.auth().signOut();
    // setTimeout(() => {
    //   location.assign("/login");
    // }, 350);
  };
  return (
    <>
      {!stateLogin && (
        <li className="nav__right-item nav__header-user">
          <Link className="user-login" to="/login">
            <i className="fas fa-user"></i>
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

function NavDesktop({ total }) {
  const [showSearch, setShowSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  // const [value, setValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      if (e.target.value.trim() === "") return;

      window.location.assign(`/search?title_like=${valueSearch}`);
    }
  };
  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="nav-desktop">
      <div className="nav__logo">
        <Link className="link-home" to="/">
          <div className="logo__image">
            <img src="../assets/image/image_home/logo1.png" alt="Image_logo" />
          </div>
          <p className="logo__text">
            VLUXURY <span>R</span>
          </p>
        </Link>
      </div>
      <div className="nav__center">
        <ul className="nav__center-list">
          <li className="nav__center-item typeProduct">
            <Link to="/category-product?isSale=true">Khuyến Mãi</Link>
          </li>
          <li className="nav__center-item nav__parent-menu">
            <Link to={"/category-product"}> Sản phẩm</Link>

            <i className="ti-angle-down"></i>
            <ul className="nav__sub-menu nav__sub-menu2">
              {productSubMenu.map((productItem) => {
                return (
                  <li className="nav__sub-item" key={productItem.productName}>
                    <Link to={productItem.linkTo} className="typeProduct">
                      {productItem.productName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="nav__center-item">
            {" "}
            <Link to="/news">Tin Tức</Link>
          </li>
          <li className="nav__center-item">
            <Link to="/map">Cửa hàng</Link>
          </li>
        </ul>
      </div>
      <ul className="nav__right-list">
        <li className="nav__right-item">
          <label htmlFor="nav__input-search">
            <div className="nav__search-title" onClick={handleShowSearch}>
              Tìm kiếm<i className="fas fa-search"></i>
            </div>
            <div
              className={showSearch ? "nav__search showSubMenu" : "nav__search"}
            >
              <input
                className="nav__input"
                id="nav__input-search"
                type="text"
                value={valueSearch}
                placeholder="Tìm sản phẩm..."
                onKeyPress={handleKeyPress}
                onChange={(e) => setValueSearch(e.target.value)}
              />
              <Link
                className="nav__link-search"
                to={`/search?title_like=${valueSearch}`}
                onClick={(e) => valueSearch.trim() === "" && e.preventDefault()}
              >
                <i className="fas fa-search"></i>
              </Link>
            </div>
          </label>
        </li>
        <li className="nav__right-item header__cart">
          <Link className="cart" to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              <span className="cart__number-product">({total || 0})</span>
              <span> </span>
            </span>
          </Link>
        </li>

        <HeaderUser />
      </ul>
    </nav>
  );
}

export default memo(NavDesktop);
