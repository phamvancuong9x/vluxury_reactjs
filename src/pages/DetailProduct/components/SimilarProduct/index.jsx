import React, { useEffect, useState } from "react";
import categoryApi from "../../../../api/categoryApi";

import ProductsSlider from "../../../../components/ProductsSlider";

function filterProductArray(productArray, idProductCurrent) {
  const NewProductArray = productArray.filter((product) => {
    return product.id != idProductCurrent;
  });
  return NewProductArray;
}
function SimilarProduct({ product }) {
  const [similarProductList, setSimilarProductList] = useState();
  const params = {
    typeProduct: product.typeProduct,
    isSale: product.isSale,
  };
  const newParams = { ...params, _page: 1, _limit: 9 };
  useEffect(() => {
    const fetchProducts = async () => {
      const productsArray = await categoryApi.getAll(newParams);
      const newProductArray = filterProductArray(productsArray, product.id);
      setSimilarProductList(newProductArray);
    };
    fetchProducts();
  }, [product.id]);
  return (
    <section id="similarProduct">
      <div className="container">
        <h3 className="similarProduct__title">SẢN PHẨM TƯƠNG TỰ</h3>

        {similarProductList && (
          <ProductsSlider productArray={similarProductList} />
        )}
      </div>
    </section>
  );
}

export default SimilarProduct;
