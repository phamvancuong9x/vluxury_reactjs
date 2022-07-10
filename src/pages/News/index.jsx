import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import newApi from "../../api/newsApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import Loading from "../../components/Loading";
import NewDetail from "./components/NewDetail";
import NewsContent from "./components/NewsContent";
import SellingProducts from "./components/SellingProducts";
import "./styles.scss";

function getNewDetail(newsList, idNewDetail) {
  return newsList?.filter((newItem) => {
    return newItem.id === idNewDetail[0];
  });
}
function News() {
  const location = useLocation();

  const params = queryString.parse(location.search);

  const { newsLists, productLists } = JSON.parse(
    sessionStorage.getItem("news") || "{}"
  );
  
  const [idNewDetail, setIdNewDetail] = useState(Object.values(params));
  const [newDetail, setNewDetail] = useState();
  const [newsList, setNewsList] = useState(newsLists || []);
  const [productList, setProductList] = useState(productLists || []);
  const [loading, setLoading] = useState(!newsLists || false);
  useEffect(() => {
    setIdNewDetail(() => Object.values(params));
    setNewDetail(getNewDetail(newsList, Object.values(params)));
  }, [location]);
  useEffect(() => {
    if (!!sessionStorage.getItem("news")) {
      return;
    }

    (async () => {
      try {
        const { newsList, productList } = await newApi.getAll();
        const newsListReverse = newsList.reverse();
        setNewsList(newsListReverse);
        setProductList(productList);

        setNewDetail(getNewDetail(newsListReverse, idNewDetail));
        sessionStorage.setItem(
          "news",
          JSON.stringify({
            newsLists: newsListReverse,
            productLists: productList,
          })
        );
        setTimeout(() => {
          setLoading(false);
        }, 800);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [location]);

  return (
    <>
      <Breadcrumbs title={"TIN TỨC THỜI TRANG"} />
      <div className="container container-news">
        {loading && <Loading />}
        <div className="row">
          <div className="col-md-3">
            {productList.length !== 0 && (
              <SellingProducts productList={productList} />
            )}
          </div>
          <div className="col-md-9">
            {idNewDetail.length === 0 && newsList.length !== 0 && (
              <NewsContent newsList={newsList} />
            )}
            {console.log("idNewDetail", idNewDetail.length !== 0)}
            {idNewDetail.length !== 0 && (
              <NewDetail newDetail={newDetail} idNewDetail={idNewDetail[0]} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
