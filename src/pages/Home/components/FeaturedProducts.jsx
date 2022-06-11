import React, { useEffect, useState } from "react";
import homeApi from "../../../api/homeApi";
import ProductsSlider from "../../../components/ProductsSlider";

function TabItem({ tabActivity, tabName, setTapActivity }) {
  return (
    <div
      className={
        tabActivity == tabName
          ? "featured-products__list tab__btn-header tab-activity"
          : "featured-products__list tab__btn-header bttn-tab"
      }
      id="tab1"
      onClick={() => {
        setTapActivity(tabName);
      }}
    >
      {tabName}
    </div>
  );
}

function FeaturedProducts() {
  const tabs = ["Bộ Vest mới", "Bán chạy", "Khuyến mãi"];
  const [tabActivity, setTapActivity] = useState("Bộ Vest mới");
  const [collectionList, setCollectionList] = useState({});

  useEffect(() => {
    (async () => {
      const { NewProductData, HotProductData, SaleProductData } =
        await homeApi.getCollectionList();
      setCollectionList({ NewProductData, HotProductData, SaleProductData });
    })();
  }, []);

  let productArray;
  if (tabActivity == tabs[0]) {
    productArray = collectionList.NewProductData;
  } else if (tabActivity == tabs[1]) {
    productArray = collectionList.HotProductData;
  } else {
    productArray = collectionList.SaleProductData;
  }
  return (
    <section className="featured-products">
      <div className="container">
        <div className="section__title">SẢN PHẨM NỔI BẬT</div>
        <div className="tab_list">
          {tabs.map((tab, i) => {
            return (
              <TabItem
                key={tab}
                tabActivity={tabActivity}
                tabName={tabs[i]}
                setTapActivity={setTapActivity}
              />
            );
          })}
        </div>
        {productArray && <ProductsSlider productArray={productArray} />}
      </div>
    </section>
  );
}

export default FeaturedProducts;
