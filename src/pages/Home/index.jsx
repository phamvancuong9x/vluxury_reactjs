import React, { useEffect, useState } from "react";
import homeApi from "../../api/homeApi";
import Loading from "../../components/Loading";
import Banner from "./components/Banner";
import CollectionList from "./components/CollectionList";
import CollectionNews from "./components/CollectionNews";
import FeaturedProducts from "./components/FeaturedProducts";
import MapHome from "./components/MapHome";
import SliderHome from "./components/SliderHome";
import "./styles.scss";

function HomePage() {
  const initHomeDate =
    (!!sessionStorage.getItem("homeData") &&
      JSON.parse(sessionStorage.getItem("homeData"))) ||
    {};
  const [homeData, setHomeData] = useState(initHomeDate);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      if (!!sessionStorage.getItem("homeData")) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        return;
      }
      (async () => {
        const { slider, bannerSale, collectionList } = await homeApi.getAll();
        const newDataHome = { ...homeData, slider, bannerSale, collectionList };
        setHomeData(newDataHome);
        sessionStorage.setItem("homeData", JSON.stringify(newDataHome));

        setTimeout(() => {
          setLoading(false);
        }, 5000);
      })();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <div className="content">
      {loading && <Loading />}

      <SliderHome slider={homeData.slider} />
      {/* <!-- nội dung trong khung 1200px--> */}
      <div className="container container-banner">
        <Banner bannerSale={homeData.bannerSale} />
        <CollectionList collectionList={homeData.collectionList} />
      </div>
      <FeaturedProducts />

      <CollectionNews />
      <MapHome />
    </div>
  );
}

export default HomePage;
