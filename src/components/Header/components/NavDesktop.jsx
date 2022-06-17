import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderUser } from "./HeaderUser";
import { productSubMenu } from "./productSubMenu";
import { SearchInput } from "./SearchInput";

function NavDesktop({ total }) {
  const [showSearch, setShowSearch] = useState(false);

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
              <SearchInput />
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
