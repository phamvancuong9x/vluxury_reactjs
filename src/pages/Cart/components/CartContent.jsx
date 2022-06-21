import { CheckoutAction } from "./CheckoutAction";
import { ProductCartItem } from "./ProductCartItem";

export function CartContent({ ProductCartList }) {
  return (
    <div className="modal_content">
      <div className="modal__cart-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sản phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="product-cart-list">
            {ProductCartList.map((product) => {
              return (
                <ProductCartItem
                  product={product}
                  key={`${product.size}${product.id}`}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <CheckoutAction ProductCartList={ProductCartList} />
    </div>
  );
}
