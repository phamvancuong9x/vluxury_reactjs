import { stringToNumberMoney } from "../../Cart/components/handleFunction";

export function ProductInfo({ product }) {
  return (
    <div className="row">
      <div className="col-2 image-container">
        <div className="image">
          <img src={product.image} alt={product.nameProduct} />
        </div>
        <div className="product_quantity">{product.quantity}</div>
      </div>
      <div className="col-6 info-product">
        <div className="product__name">{product.nameProduct}</div>
        <div className="product__size">{product.size}</div>
      </div>
      <div className="col-3 info-price">
        <div className="product__price">
          {stringToNumberMoney(product.priceNumber * product.quantity)}
        </div>
      </div>
    </div>
  );
}
