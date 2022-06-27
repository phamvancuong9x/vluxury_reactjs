import { useEffect, useState } from "react";
import homeApi from "../../../api/homeApi";
import InterfaceHome from "../feature/InterfaceHome";
import NewsAdmin from "../feature/NewsAdmin";
import OrderAdmin from "../feature/OrderAdmin";
import ProductAdmin from "../feature/ProductAdmin";
import AdminMenu from "./AdminMenu";
import { tabsTypeProduct } from "./data";

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

export default AdminContent;
