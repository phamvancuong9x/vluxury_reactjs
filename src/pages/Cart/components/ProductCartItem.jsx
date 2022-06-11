import { CartRemove } from "./CartRemove";
import { stringToNumberMoney } from "./handleFunction";
import { QuanTityProduct } from "./QuanTityProduct";

export function ProductCartItem({ product }) {
  if (!product || product?.length === 0) return;
  return (
    <tr data-id_user="" data-id_product="">
      <td>
        <div className="image">
          <img src={product.image} alt={`Ảnh ${product.nameProduct} `} />
        </div>
      </td>
      <td>
        <div className="product__name">{product.nameProduct}</div>
        <div className="product__size">
          <div className="product__size-name">
            Size: <span className="product__size-number">{product.size}</span>
          </div>
        </div>

        <div className="product__trademark">Thương hiệu : Vluxury</div>
        <div className="product__cart-mobile">
          <div className="product__size-name-mobile">
            Size: <span className="product__size-number">{product.size}</span>
          </div>

          <div className="product__price">
            {product.price_product}
            <span className="mobile-cart-remove">
              <CartRemove product={product} />
            </span>
          </div>
          <div className="product__quantity-mobile">
            <QuanTityProduct product={product} />
          </div>
        </div>
      </td>
      <td>
        <div className="product__price">{product.price_product}</div>
      </td>
      <td>
        <QuanTityProduct product={product} />
      </td>
      <td>
        <div className="product__priceTotalItem">
          {stringToNumberMoney(product.priceNumber * product.quantity)}
        </div>
      </td>
      <td>
        <CartRemove product={product} />
      </td>
    </tr>
  );
}
