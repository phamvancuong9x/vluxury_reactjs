import { Pagination } from "@mui/material";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import FilterProduct from "./components/FilterProduct";
import ProductList from "./components/ProductList";
import SortProduct from "./components/SortProduct";
import "./styles.scss";

const collectionsTitle = {
  vest: "ÁO VEST NAM",
  somi: "ÁO SƠ MI NAM",
  quanau: "QUẦN ÂU NAM",
  giay: "GIÀY DA NAM",
  phukien: "PHỤ KIỆN",
};
function CategoryProduct() {
  const location = useLocation();
  let navigate = useNavigate();

  const params = queryString.parse(location.search);
  const { _page, _limit, ...newParams } = params;
  const [totalPage, setTotalPage] = useState(1);
  const [priceRange, setPriceRange] = useState({});
  const [sortProduct, setSortProduct] = useState({});

  const [filters, setFilters] = useState({
    ...params,
    ...priceRange,
    ...sortProduct,
    _page: params._page || 1,
    _limit: 12,
  });

  useEffect(() => {
    (async () => {
      try {
        const productsArray = await categoryApi.getAll({
          ...newParams,
          ...priceRange,
        });
        setTotalPage(Math.ceil(productsArray.length / 12));
        setFilters({
          ...newParams,
          ...priceRange,
          ...sortProduct,
          _page: params._page || 1,
          _limit: 12,
        });
      } catch (error) {
        console.log("Failed to fetch product list ", error);
      }
    })();
  }, [
    params.typeProduct,
    params.isSale,
    priceRange,
    sortProduct._sort,
    sortProduct._order,
  ]);

  // update url
  // useEffect(() => {
  //   const newUrl = location.pathname + "?" + queryString.stringify(filters);
  //   navigate(newUrl);
  // }, [filters]);
  const handleChange = (e, page) => {
    document.documentElement.scrollTo(0, 0);
    setFilters((prevFilters) => ({ ...prevFilters, _page: page }));
  };
  return (
    <div className="category-main">
      <Breadcrumbs
        title={
          collectionsTitle[params.typeProduct] ||
          (params.isSale && "SẢN PHẨM KHUYẾN MÃI") ||
          "TẤT CẢ SẢN PHẨM"
        }
      />
      <div className="container container-category">
        <div className="collections__header">
          <FilterProduct setPriceRange={setPriceRange} params={params} />
          <div className="collections__title" id="product-list-title">
            {collectionsTitle[params.typeProduct] ||
              (params.isSale && "SẢN PHẨM KHUYẾN MÃI") ||
              "TẤT CẢ SẢN PHẨM"}
          </div>
          <SortProduct
            setSortProduct={setSortProduct}
            params={params}
            filters={filters}
          />
        </div>
        <div className="collection__content">
          <ProductList
            filters={filters}
            priceRange={priceRange}
            params={params}
          />
          {totalPage >= 1 && (
            <Pagination
              page={+filters._page}
              count={totalPage}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryProduct;
