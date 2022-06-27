import { useState } from "react";

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

export default AdminMenu;
