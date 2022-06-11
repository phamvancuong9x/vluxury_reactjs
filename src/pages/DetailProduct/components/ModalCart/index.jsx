import React from "react";

function ModalCart() {
  return (
    <div className="modal">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-10 col-sm-9 col-11">
            <div className="modal__container">
              <div className="modal__header">
                <p>
                  GIỎ HÀNG <span>CỦA BẠN </span>
                  <span className="headerQuantity">
                    ( ĐANG CÓ<span className="quantityProductOfCart">3</span>
                    <span>SẢN PHẨM )</span>
                  </span>
                  <span className="headerMobileQuantity">
                    ( CÓ<span className="quantityProductOfCart">3</span>
                    <span>SẢN PHẨM ) </span>
                  </span>
                </p>
                <div className="modal__btn-close btn-save-info">
                  <i className="fa fa-times"></i>
                </div>
              </div>
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
                    <tbody id="product-cart-list"></tbody>
                  </table>
                </div>
                <div className="row modal__checkout-actions">
                  <div className="col-12 col-md-6">
                    <div className="modal__cart-note">
                      <textarea
                        className="textarea-note"
                        name=""
                        placeholder="Ghi chú"
                      ></textarea>
                    </div>
                    <div className="modal__btn-close btn-save-info">
                      <i className="fa fa-reply"></i>
                      <span>Tiếp tục mua hàng</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 modal__checkout-actions-right">
                    <h3 className="modal__total-money">Tổng : 0,000,00₫</h3>
                    <div className="modal__btn-checkout">
                      <div className="btn-update-to-cart">
                        Cập nhật giỏ hàng
                      </div>
                      <a
                        className="btn-buys btn-save-info"
                        href="checkout.html"
                        title="title"
                      >
                        Tiến hành thanh toán
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-empty">
                <p>Giỏ hàng trống </p>
                <p>
                  Tiếp tục mua hàng
                  <a href="index.html" title="title">
                    tại đây
                  </a>
                </p>
              </div>
              <template id="modal-cart-product">
                <tr data-id_user="" data-id_product="">
                  <td>
                    <div className="image">
                      <img
                        src="../assets/image/image_product-detail/vest/Vest_LH67_2-2.jpg"
                        alt="Ảnh sản phẩm"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="product__name">ÁO VEST KẺ XANH - 263</div>
                    <div className="product__size">
                      <div className="product__size-name">
                        Size: <span className="product__size-number">48</span>
                      </div>
                    </div>
                    <div className="product__trademark">
                      Thương hiệu : Vluxury
                    </div>
                    <div className="product__cart-mobile">
                      <div className="product__quantity-mobile">
                        Số lượng :
                        <span className="product__quantity-mobile_value">
                          1
                        </span>
                      </div>
                      <div className="product__price">2,900,000₫</div>
                      <div className="product__size-name-mobile">
                        Size: <span className="product__size-number">48</span>
                        <span className="mobile-cart-remove">Xóa</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product__price">2,900,000₫</div>
                  </td>
                  <td>
                    <div className="detailProduct__quantity-input">
                      <input
                        className="product__quantity"
                        type="text"
                        value="1"
                        name="quantity"
                        pattern="[0-9]*"
                        min="0"
                        maxlength="2"
                        required=""
                      />
                      <span className="icon-minus-modal icon-quantity-modal">
                        <i className="fas fa-minus"></i>
                      </span>
                      <span className="icon-plus-modal icon-quantity-modal">
                        <i className="fas fa-plus"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="product__priceTotalItem"></div>
                  </td>
                  <td>
                    <div className="cart-remove">
                      <i className="fas fa-trash-alt"></i>
                    </div>
                  </td>
                </tr>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCart;
