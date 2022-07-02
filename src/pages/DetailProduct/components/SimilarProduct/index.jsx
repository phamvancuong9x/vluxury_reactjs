import { useEffect, useState } from "react";
import categoryApi from "../../../../api/categoryApi";

import ProductsSlider from "../../../../components/ProductsSlider";
import { SimilarProductListSkeleton } from "../../../../components/Skeleton/component/SimilarProductListSkeleton";

function filterProductArray(productArray, idProductCurrent) {
  const NewProductArray = productArray.filter((product) => {
    return product.id != idProductCurrent;
  });
  return NewProductArray;
}

function SimilarProduct({ product }) {
  const [similarProductList, setSimilarProductList] = useState();
  const params = {
    typeProduct: product?.typeProduct,
    isSale: product?.isSale,
  };
  const newParams = { ...params, _page: 1, _limit: 9 };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    try {
      (async () => {
        const productsArray = await categoryApi.getAll(newParams);
        const newProductArray = filterProductArray(productsArray, product?.id);
        setSimilarProductList(newProductArray);
        setLoading(false);
      })();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [product?.id]);
  return (
    <section id="similarProduct">
      <div className="container">
        {!loading && similarProductList && product && (
          <>
            <h3 className="similarProduct__title">SẢN PHẨM TƯƠNG TỰ</h3>

            <ProductsSlider productArray={similarProductList} />
          </>
        )}
        {loading && <SimilarProductListSkeleton />}
      </div>
    </section>
  );
}

export default SimilarProduct;
