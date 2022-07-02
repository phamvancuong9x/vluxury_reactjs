import ProductItem from "../../../../components/ProductsSlider/components/ProductItem";
import { ProductsItemSkeleton } from "../../../../components/Skeleton";

function ProductList({ loading, productList }) {
  return (
    <ul className="row" id="category-products-list">
      {loading && <ProductsItemSkeleton quantity={12} />}
      {!loading &&
        productList?.map((product) => {
          return (
            <li
              key={product.id}
              className="category-products__item col-6 col-sm-4 col-lg-3 "
            >
              <ProductItem product={product} key={product.id} />
            </li>
          );
        })}
      {productList?.length === 0 && (
        <li className="no_product" style={{ minHeight: "50vh" }}>
          <h3>Không có sản phẩm phù hợp !</h3>
        </li>
      )}
    </ul>
  );
}

export default ProductList;
