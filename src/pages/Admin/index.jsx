import React, { useEffect, useState } from "react";
import homeApi from "../../api/homeApi";
import AdminContainer from "./components/AdminContainer";
import { tabsTypeProduct } from "./components/data";
import InterfaceHome from "./pages/InterfaceHome";
import NewsAdmin from "./pages/NewsAdmin";
import OrderAdmin from "./pages/OrderAdmin";
import ProductAdmin from "./pages/ProductAdmin";
import "./styles.scss";

function HeaderAdmin() {
  return (
    <nav className="header-admin">
      <p>
        Xin chào <span>Admin</span>
      </p>
      <a href="https://vluxury-reactjs-fashionss.vercel.app/">Trang chủ</a>
    </nav>
  );
}
function AdminMenu({
  tabsMenu,
  tab,
  setTab,
  tabsTypeProduct,
  isChange,
  setIsChange,
}) {
  const [showMenuProduct, setShowMenuProduct] = useState(false);
  return (
    <ul className="admin-menu">
      <li>Admin Menu</li>
      {tabsMenu.map((tabItem) => {
        if (tabItem == "Sản phẩm") return;
        return (
          <li
            className={tab == tabItem ? "tab-menu-active" : ""}
            key={tabItem}
            onClick={() => {
              setTab(tabItem);
            }}
          >
            {tabItem}
          </li>
        );
      })}
      <li>
        <span
          className="menu-parent-admin"
          onClick={() => setShowMenuProduct(!showMenuProduct)}
        >
          Sản phẩm
        </span>
        <ul
          className={
            showMenuProduct
              ? "menu-children-admin-active "
              : "menu-children-admin"
          }
        >
          {tabsTypeProduct.map((tabItem) => {
            return (
              <li
                key={tabItem.typeProducts}
                className={
                  tab[0]?.typeProducts == tabItem?.typeProducts
                    ? "tab-menu-active"
                    : ""
                }
                onClick={(e) => {
                  e.stopPropagation();
                  setIsChange(!isChange);
                  setTab([tabItem, "product"]);
                }}
              >
                {tabItem.typeProducts}
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}
function AdminContent() {
  const tabsMenu = ["Giao diện", "Tin tức", "Đơn hàng", "Sản phẩm"];

  const [tab, setTab] = useState(tabsMenu[0]);
  const [homeData, setHomeData] = useState({});
  const [isChange, setIsChange] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      (async () => {
        const { slider, bannerSale, collectionList } = await homeApi.getAll();
        const newDataHome = { ...homeData, slider, bannerSale, collectionList };
        setHomeData(newDataHome);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [isChange]);

  return (
    <div className="container-fluid admin-content">
      <div className="row">
        <div className="col-12 col-sm-4 col-md-3">
          <AdminMenu
            tabsMenu={tabsMenu}
            tab={tab}
            setTab={setTab}
            tabsTypeProduct={tabsTypeProduct}
            setIsChange={setIsChange}
            isChange={isChange}
          />
        </div>
        <div className="col-12 col-sm-8 col-md-9">
          {tab == tabsMenu[0] && (
            <InterfaceHome
              tab={tab}
              sliderData={homeData.slider}
              bannerSaleData={homeData.bannerSale}
              isChange={isChange}
              setIsChange={setIsChange}
              loading={loading}
            />
          )}
          {tab == tabsMenu[1] && (
            <NewsAdmin
              tab={tab}
              isChange={isChange}
              setIsChange={setIsChange}
            />
          )}
          {tab == tabsMenu[2] && (
            <OrderAdmin
              tab={tab}
              isChange={isChange}
              setIsChange={setIsChange}
            />
          )}
          {tab[1] == "product" && (
            <ProductAdmin
              tab={tab}
              isChange={isChange}
              setIsChange={setIsChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function Admin() {
  return (
    <>
      <HeaderAdmin />
      <AdminContent />
    </>
  );
}

export default Admin;
