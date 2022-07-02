import { Pagination } from "@mui/material";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import alertSlice from "../../redux/slice/alertSlice";
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
  // let navigate = useNavigate();
  const params = queryString.parse(location.search);
  const { _page, _limit, ...newParams } = params;
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(1);
  const [priceRange, setPriceRange] = useState({});
  const [sortProduct, setSortProduct] = useState({});
  const [productList, setProductList] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    setPage(1);
  }, [location]);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const categoryProductList = await categoryApi.getAll({
          ...params,
          ...priceRange,
          ...sortProduct,
          _page: page,
          _limit: 12,
        });
        const totalPage = await categoryApi.getTotalPage({
          ...newParams,
          ...priceRange,
        });

        setProductList(categoryProductList);
        setTotalPage(totalPage);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch product list ", error);
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
  }, [
    params.typeProduct,
    params.isSale,
    priceRange,
    sortProduct._sort,
    sortProduct._order,
    page,
  ]);
  //  update url
  // useEffect(() => {
  //   const newUrl = location.pathname + "?" + queryString.stringify(filters);
  //   navigate(newUrl);
  // }, [filters]);
  const handleChange = (e, page) => {
    document.documentElement.scrollTo(0, 0);
    setPage(page);
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
          <SortProduct setSortProduct={setSortProduct} params={params} />
        </div>
        <div className="collection__content">
          <ProductList productList={productList} loading={loading} />
          {totalPage >= 1 && (
            <Pagination
              page={page}
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
