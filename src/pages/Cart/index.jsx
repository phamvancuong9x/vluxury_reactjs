import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeQuantity, deleteProduct } from "../../actions/addToCart";
import Breadcrumbs from "../../components/Breadcrumbs";
import { stringToNumberMoney, totalPrice } from "./components/handleFunction";
import "./styles.scss";

function CartEmpty() {
  return (
    <div className="cart-empty">
      <p>Giỏ hàng trống </p>
      <p>
        Tiếp tục mua hàng
        <Link to="/">tại đây</Link>
      </p>
    </div>
  );
}

function QuanTityProduct({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity == 1) return;
    setQuantity(quantity - 1);
  };
  const handleChange = (e) => {
    if (Number.isInteger(+e.target.value) == false || +e.target.value <= 0) {
      return;
    }
    setQuantity(+e.target.value);
  };
  useEffect(() => {
    const action = changeQuantity(product.id, product.size, quantity);
    dispatch(action);
  }, [quantity]);

  return (
    <div className="detailProduct__quantity-input">
      <input
        className="product__quantity"
        type="text"
        value={quantity}
        name="quantity"
        maxLength="3"
        required=""
        onChange={(e) => handleChange(e)}
      />
      <span
        className="icon-minus-modal icon-quantity-modal"
        onClick={handleDecrease}
      >
        {" "}
        <i className="fas fa-minus"></i>
      </span>
      <span
        className="icon-plus-modal icon-quantity-modal"
        onClick={handleIncrease}
      >
        {" "}
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
}
function CartRemove({ product }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    const action = deleteProduct(product.id, product.size);
    dispatch(action);
  };
  return (
    <div className="cart-remove" onClick={handleRemove}>
      <i className="fas fa-trash-alt"></i>
    </div>
  );
}

function ProductCartItem({ product }) {
  if (!product || product?.length == 0) return;
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
function CheckoutAction({ ProductCartList }) {
  const total_price = stringToNumberMoney(totalPrice(ProductCartList));

  const handleUpdateCart = () => {
    localStorage.setItem("cart", JSON.stringify(ProductCartList));
  };
  return (
    <div className="row modal__checkout-actions">
      <div className="col-12 col-md-6">
        <div className="modal__cart-note">
          <textarea
            className="textarea-note"
            name=""
            placeholder="Ghi chú"
          ></textarea>
        </div>
      </div>
      <div className="col-12 col-md-6 modal__checkout-actions-right">
        <h3 className="modal__total-money">{`Tổng : ${total_price}`}</h3>
        <div className="modal__btn-checkout">
          <div className="btn-update-to-cart" onClick={handleUpdateCart}>
            Cập nhật giỏ hàng
          </div>
          <Link className="btn-buys btn-save-info" to="/checkout">
            Tiến hành thanh toán
          </Link>
        </div>
      </div>
    </div>
  );
}
function CartContent({ ProductCartList }) {
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
            {ProductCartList.map((product, i) => {
              return <ProductCartItem product={product} key={i} />;
            })}
          </tbody>
        </table>
      </div>
      <CheckoutAction ProductCartList={ProductCartList} />
    </div>
  );
}
function Cart() {
  const ProductCartList = useSelector((state) => state.add_cart);
  if (ProductCartList.length == 0) {
    localStorage.setItem("cart", "[]");
  }
  return (
    <>
      <Breadcrumbs title={"Giỏ hàng"} />
      <div className="container">
        <h2>Giỏ hàng</h2>
        {ProductCartList.length == 0 ? (
          <CartEmpty />
        ) : (
          <CartContent ProductCartList={ProductCartList} />
        )}
      </div>
    </>
  );
}

export default Cart;
