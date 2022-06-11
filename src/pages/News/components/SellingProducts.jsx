import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../../../components/ProductsSlider/components/ProductItem";

function SellingProducts({ productList }) {
  return (
    <div className="sellings-products">
      <h2 className="sellings-products__title">Sản phẩm bán chạy</h2>
      <div id="news-product-list">
        {productList.map((product, i) => {
          return <ProductItem product={product} key={i} />;
        })}
      </div>
      <Link className="btn-more" to="/category-product">
        XEM THÊM
      </Link>
    </div>
  );
}

export default SellingProducts;
