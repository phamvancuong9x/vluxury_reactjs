import React, { useEffect, useRef, useState } from "react";
import categoryApi from "../../../../api/categoryApi";
import Loading from "../../../../components/Loading";
import ProductItem from "../../../../components/ProductsSlider/components/ProductItem";

function ProductList({ filters, priceRange }) {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState(undefined);
  const IdSetTimeout = useRef();
  // lấy danh sách sản phẩm
  useEffect(() => {
    setLoading(true);
    setProductList(undefined);
    (async () => {
      try {
        const productsArray = await categoryApi.getAll(filters);

        setProductList(productsArray);
        IdSetTimeout.current = setTimeout(() => {
          setLoading(false);
        }, 200);
      } catch (error) {
        console.log("Failed to fetch product list ", error);
      }
    })();
    return () => {
      clearTimeout(IdSetTimeout.current);
    };
  }, [filters, priceRange]);

  return (
    <ul className="row" id="category-products-list">
      {loading && <Loading />}
      {productList?.map((product) => {
        return (
          <li
            key={product.id}
            className="category-products__item col-6 col-sm-4 col-lg-3 animate__fadeInUp animate__animated"
          >
            <ProductItem product={product} key={product.id} />
          </li>
        );
      })}

      {productList?.length == 0 && (
        <li className="display-flex-center" style={{ minHeight: "50vh" }}>
          <h3>Không có sản phẩm</h3>
        </li>
      )}
    </ul>
  );
}

export default ProductList;
