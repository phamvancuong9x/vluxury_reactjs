import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import homeApi from "../../api/homeApi";
import Loading from "../../components/Loading";
import alertSlice from "../../redux/slice/alertSlice";
import {
  WriteDataChange,
  WriteUserData,
} from "../Checkout/components/constant";
import Banner from "./components/Banner";
import CollectionList from "./components/CollectionList";
import CollectionNews from "./components/CollectionNews";
import FeaturedProducts from "./components/FeaturedProducts";
import MapHome from "./components/MapHome";
import SliderHome from "./components/SliderHome";
import "./styles.scss";

function HomePage() {
  const db = getDatabase();
  const dispatch = useDispatch();
  const initHomeDate =
    (!!sessionStorage.getItem("homeData") &&
      JSON.parse(sessionStorage.getItem("homeData"))) ||
    {};
  const [homeData, setHomeData] = useState(initHomeDate);
  const [loading, setLoading] = useState(true);
  const [checkDataChange, setCheckDataChange] = useState(false);
  useEffect(() => {
    onValue(ref(db, "dataChange/"), (snapshot) => {
      const data1 = snapshot.val();
      if (!data1) return;
      setCheckDataChange(data1);
    });
  }, []);

  useEffect(() => {
    if (!!sessionStorage.getItem("homeData") && checkDataChange === false) {
      setLoading(false);
      return;
    }
    (async function () {
      try {
        const { slider, bannerSale, collectionList } = await homeApi.getAll();
        const newDataHome = { ...homeData, slider, bannerSale, collectionList };
        setHomeData(newDataHome);
        sessionStorage.setItem("homeData", JSON.stringify(newDataHome));
        WriteDataChange(false);
        setCheckDataChange(false);
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
  }, [checkDataChange]);

  return (
    <div className="content">
      {loading && <Loading />}

      <SliderHome slider={homeData.slider} />
      {/* <!-- nội dung trong khung 1200px--> */}
      <div className="container container-banner">
        <Banner bannerSale={homeData.bannerSale} />
        <CollectionList collectionList={homeData.collectionList} />
      </div>
      <FeaturedProducts checkDataChange={checkDataChange} />

      <CollectionNews checkDataChange={checkDataChange} />
      <MapHome />
    </div>
  );
}

export default HomePage;
