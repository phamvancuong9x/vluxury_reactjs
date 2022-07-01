import { Skeleton } from "@mui/material";
import ProductItem from "../../../../components/ProductsSlider/components/ProductItem";
function ProductList({ loading, productList }) {
  return (
    <ul className="row" id="category-products-list">
      {loading &&
        Array(4)
          .fill(null)
          .map((item, i) => {
            return (
              <li
                key={i}
                className="category-products__item col-6 col-sm-4 col-lg-3 "
              >
                <div className=" category-products__item-skeleton">
                  <Skeleton
                    variant="rectangular"
                    height={"83%"}
                    style={{
                      marginBottom: 10,
                      marginLeft: 12,
                      marginRight: 12,
                    }}
                  />
                  <Skeleton
                    variant="text"
                    width={"80%"}
                    style={{ margin: "auto" }}
                  />
                  <Skeleton
                    variant="text"
                    width={"40%"}
                    style={{ margin: "auto", marginTop: 10 }}
                  />
                </div>
              </li>
            );
          })}
      {productList?.map((product) => {
        return (
          <li
            key={product.id}
            className="category-products__item col-6 col-sm-4 col-lg-3 "
          >
            <ProductItem product={product} key={product.id} />
          </li>
        );
      })}
      {productList?.length == 0 && (
        <li className="no_product" style={{ minHeight: "50vh" }}>
          <h3>Không có sản phẩm phù hợp !</h3>
        </li>
      )}
    </ul>
  );
}

export default ProductList;
