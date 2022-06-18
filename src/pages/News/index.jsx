import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import newApi from "../../api/newsApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import Loading from "../../components/Loading";
import NewsContent from "./components/NewsContent";
import SellingProducts from "./components/SellingProducts";
import "./styles.scss";

function News() {
  const { newsLists, productLists } =
    (!!sessionStorage.getItem("news") &&
      JSON.parse(sessionStorage.getItem("news"))) ||
    {};
  const [newsList, setNewsList] = useState(newsLists || []);
  const [productList, setProductList] = useState(productLists || []);

  const [loading, setLoading] = useState(!newsLists || false);
  const controller = useRef(new AbortController());
  useEffect(() => {
    if (!!sessionStorage.getItem("news")) return;

    (async () => {
      try {
        const { newsList, productList } = await newApi.getAll(
          {
            signal: controller.current.signal,
          },
          {
            signal: controller.current.signal,
          }
        );
        const newsListReverse = newsList.reverse();
        setNewsList(newsListReverse);
        setProductList(productList);
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
      return () => {
        controller.current.abort();
      };
    })();
  }, []);

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
            {newsList.length !== 0 && <NewsContent newsList={newsList} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
