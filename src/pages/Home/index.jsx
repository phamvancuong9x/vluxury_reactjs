import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import homeApi from "../../api/homeApi";
import Loading from "../../components/Loading";
import alertSlice from "../../redux/slice/alertSlice";
import Banner from "./components/Banner";
import CollectionList from "./components/CollectionList";
import CollectionNews from "./components/CollectionNews";
import FeaturedProducts from "./components/FeaturedProducts";
import MapHome from "./components/MapHome";
import SliderHome from "./components/SliderHome";
import "./styles.scss";

function HomePage() {
  const dispatch = useDispatch();
  const initHomeDate =
    (!!sessionStorage.getItem("homeData") &&
      JSON.parse(sessionStorage.getItem("homeData"))) ||
    {};
  const [homeData, setHomeData] = useState(initHomeDate);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!!sessionStorage.getItem("homeData")) {
      setLoading(false);
      return;
    }
    (async function () {
      try {
        const { slider, bannerSale, collectionList } = await homeApi.getAll();
        const newDataHome = { ...homeData, slider, bannerSale, collectionList };
        setHomeData(newDataHome);
        sessionStorage.setItem("homeData", JSON.stringify(newDataHome));

        setTimeout(() => {
          setLoading(false);
        }, 200);
      } catch (error) {
        console.log(error);
        setLoading(true);
        dispatch(
          alertSlice.actions.changeAlertError({
            showAlertError: true,
            alertContentError:
              "Mất kết nối tới server .Vui lòng tải lại trang !",
          })
        );
      }
    })();
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
