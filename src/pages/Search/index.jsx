import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import Loading from "../../components/Loading";
import ProductItem from "../../components/ProductsSlider/components/ProductItem";
import "./styles.scss";

function Search() {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const [productList, setProductList] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(true);
  const [filters, setFilters] = useState({
    ...params,
    _page: 1,
    _limit: 12,
  });
  useEffect(() => {
    setLoadingSearch(true);
    (async () => {
      try {
        const productsArray = await categoryApi.getAll(filters);
        setFilters({ ...filters, ...params });
        setProductList(productsArray);
        setLoadingSearch(false);
      } catch (error) {
        console.log("Failed to fetch product list ", error);
        setLoadingSearch(false);
      }
    })();
  }, [filters]);

  return (
    <>
      <Breadcrumbs title={"Tìm Kiếm"} />
      <div className="container">
        <div
          className="collections__header"
          style={{ justifyContent: "center" }}
        >
          <h2 style={{ fontSize: "26px" }}>
            {" "}
            Kết quả tìm kiếm cho từ khóa : <span>{params.title_like}</span>{" "}
          </h2>
        </div>

        <div className="collection__content">
          {loadingSearch && <Loading />}
          {productList.length === 0 && (
            <h4 className="search-empty">Không tìm được sản phẩm !</h4>
          )}
          <div className="row" id="category-products-list">
            {productList.map((product) => {
              return (
                <div className="col-6 col-sm-4 col-lg-3" key={product.id}>
                  <ProductItem product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
