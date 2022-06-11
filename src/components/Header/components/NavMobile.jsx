import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { productSubMenu } from "./productSubMenu";

function MenuProduct() {
  const [showMenuProduct, setShowMenuProduct] = useState(false);
  const handleShowMenuProduct = () => {
    setShowMenuProduct(!showMenuProduct);
  };
  return (
    <li
      className={
        showMenuProduct
          ? "nav-mobile__center-item nav-mobile__parent-menu"
          : "nav-mobile__center-item nav-mobile__parent-menu nav-mobile__parent-menu-iconPlus"
      }
    >
      <div className="nav-mobile__parent-menu-title">
        <Link to="/category-product">Sản Phẩm </Link>
        <i className="fa-solid fa-minus" onClick={handleShowMenuProduct}></i>
      </div>
      <ul
        className={
          showMenuProduct
            ? "nav-mobile__sub-menu nav-mobile__menuProduct-activity "
            : "nav-mobile__sub-menu"
        }
      >
        {productSubMenu.map((productItem) => {
          return (
            <li className="nav-mobile__sub-item" key={productItem.productName}>
              <Link to={productItem.linkTo} className="typeProduct">
                {productItem.productName}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

function DesignOwnProduct() {
  const [showDesignOwnProduct, setShowDesignOwnProduct] = useState(false);
  const handleShowDesignOwnProduct = () => {
    setShowDesignOwnProduct(!showDesignOwnProduct);
  };
  return (
    <li
      className={
        showDesignOwnProduct
          ? "nav-mobile__center-item nav-mobile__parent-menu "
          : "nav-mobile__center-item nav-mobile__parent-menu nav-mobile__parent-menu-iconPlus"
      }
    >
      <div className="nav-mobile__parent-menu-title nav-mobile__parent-menu-design">
        Thiết kế riêng
        <i
          className="fa-solid fa-minus"
          onClick={handleShowDesignOwnProduct}
        ></i>
      </div>

      <ul
        className={
          showDesignOwnProduct
            ? "nav-mobile__sub-menu nav-mobile__menuDesignProduct-activity"
            : "nav-mobile__sub-menu"
        }
      >
        <li className="nav-mobile__sub-item">
          <Link to="/custom-design-shirt"> Áo sơ mi riêng</Link>
        </li>
        <li className="nav-mobile__sub-item">
          <Link to="custom-design-vest"> Bộ SUIT riêng</Link>
        </li>
      </ul>
    </li>
  );
}

function MenuBar({ showMenuBar, setShowMenuBar }) {
  const handleCloseMenuBar = () => {
    setShowMenuBar(!showMenuBar);
  };

  return (
    <div
      className={
        showMenuBar
          ? "menu-bars-container menu-bars-activity"
          : "menu-bars-container"
      }
    >
      <div className="menu-bars__close">
        <span>Menu</span>
        {/* <div className="close-menu-bar"> */}
        <i className="fas fa-times" onClick={handleCloseMenuBar}></i>
        {/* </div> */}
      </div>
      <label className="nav-mobile__search" htmlFor="nav-mobile__input-search">
        <input
          className="nav-mobile__input"
          id="nav-mobile__input-search"
          type="text"
          placeholder="Tìm sản phẩm..."
        />
        <a className="nav-mobile__link-search" style={{ display: "block" }}>
          <i className="fas fa-search"></i>
        </a>
      </label>
      <ul className="nav-mobile__center-list">
        <li
          className="nav-mobile__center-item typeProduct"
          data-type-product="categoryProductSale"
          data-is-sale="true"
        >
          <Link to="/category-product?isSale=true">Khuyến Mãi</Link>
        </li>

        <MenuProduct />
        {/* <DesignOwnProduct /> */}

        <li className="nav-mobile__center-item">
          <Link to="/news"> Tin Tức </Link>
        </li>
        <li className="nav-mobile__center-item">
          <Link to="/map">Cửa Hàng</Link>
        </li>
        <li className="nav-mobile__center-item nav-mobile-login">
          <Link to="/login">
            <i className="fas fa-user"></i>
            <span>Đăng nhập</span>
          </Link>
        </li>
        <li className="header-mobile__user nav-mobile__center-item">
          <div className="header-mobile__user-info">
            <div className="header-mobile__user-image">
              <img
                src="../assets/image/image_home/anhdaidien.jpg"
                alt="user image"
              />
            </div>
          </div>
          <div className="header-mobile__user-content header-user-container">
            <div
              style={{
                paddingBottom: "5px",
                borderBottom: "1px solid #ccc",
              }}
            >
              <div className="header-mobile__user-name"></div>
              <i className="fa-solid fa-minus"></i>
            </div>
            <ul className="header-mobile__user-list">
              <li className="header-mobile__user-item">
                <Link to="/user">
                  <span>Tài khoản của tôi</span>
                </Link>
              </li>
              <li className="header-mobile__user-item">
                <span>Đơn mua</span>
              </li>
              <li className="header-mobile__user-item header__user-logout">
                <span>Đăng xuất</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

function NavMobile({ total }) {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const handleShowMenu = () => {
    setShowMenuBar(!showMenuBar);
  };
  return (
    <nav className="nav-mobile">
      <div className="nav-mobile__icon-cart header__cart">
        <Link className="cart" to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <span>
            <span className="cart__number-product">({total || 0})</span>
            <span> </span>
          </span>
        </Link>
      </div>
      <div className="nav-mobile__logo nav__logo">
        <Link className="link-home" to="/">
          <div className="logo__image">
            <img src="../assets/image/image_home/logo1.png" alt="Image logo" />
          </div>
          <p className="logo__text">
            VLUXURY <span>R</span>
          </p>
        </Link>
      </div>
      <div className="nav-mobile__menu-bars">
        <div className="menu-bars__icon-bars" onClick={handleShowMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <MenuBar showMenuBar={showMenuBar} setShowMenuBar={setShowMenuBar} />
      </div>
    </nav>
  );
}

export default memo(NavMobile);
