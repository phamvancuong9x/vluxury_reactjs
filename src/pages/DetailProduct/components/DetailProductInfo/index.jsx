import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../../../actions/addToCart";
import { Error, Success } from "../../../../components/Alert";
import { LoadingBtn } from "../../../../components/Loading";
import ProductQuantityInput from "../ProductQuantityInput";
import { checkProductCart } from "./checkProductCart";

const BoxSupportInFoArray = [
  {
    image:
      "../assets/image/image_product-detail/icon/pro_policy_icon1_detail.webp",
    nameSupport: "Đổi trả miễn phí 365 ngày bất cứ lỗi sản phẩm khi nhận hàng",
  },
  {
    image:
      "../assets/image/image_product-detail/icon/pro_policy_icon5_detail.webp",
    nameSupport: "Đóng túi, hộp miễn phí với tất cả đơn hàng",
  },
  {
    image:
      "../assets/image/image_product-detail/icon/pro_policy_icon4_detail.webp",
    nameSupport: "Ship hàng và kiểm tra hàng tại nhà trước khi thanh toán",
  },
  {
    image:
      "../assets/image/image_product-detail/icon/pro_policy_icon6_detail.webp",
    nameSupport: "Cam kết giá tốt nhất với chất lượng tốt nhất",
  },
];
function BoxSupportItem({ BoxSupport }) {
  return (
    <div className="box-support">
      <div className="image">
        <img src={BoxSupport.image} alt="Ảnh icon support" />
      </div>
      <span>{BoxSupport.nameSupport}</span>
    </div>
  );
}
function ProductSize({ size, setSize }) {
  const sizeArray = ["48", "50", "52", "54", "56"];
  const handleChangeSize = (sizeText) => {
    setSize(sizeText);
  };
  return (
    <div className="detailProduct__size">
      <div className="detailProduct__size-title">SIZE:</div>
      {sizeArray.map((sizeText) => {
        return (
          <span
            className={
              size == sizeText
                ? "detailProduct__size-item borderColor-active"
                : "detailProduct__size-item "
            }
            key={sizeText}
            onClick={() => handleChangeSize(sizeText)}
          >
            {sizeText}
          </span>
        );
      })}
    </div>
  );
}

function DetailProductInfo({ product }) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("48");
  const [successAddCart, setSuccessAddCart] = useState(false);
  const [checkCart, setCheckCart] = useState(false);
  const cartProductArray = useSelector((state) => state.add_cart);
  const dispatch = useDispatch();
  useEffect(() => {
    setSuccessAddCart(false);
    setCheckCart(false);
  }, [size]);

  const handleAddToCart = () => {
    if (loadingBtn) return;
    const productInfo = {
      id: product.id,
      nameProduct: product.name_product,
      image: product.imageProduct[1],
      price_product: product.price_product,
      priceNumber: product.priceNumber,
      quantity,
      size,
    };

    setCheckCart(false);
    setSuccessAddCart(false);
    setLoadingBtn(true);
    if (checkProductCart(cartProductArray, productInfo)) {
      setCheckCart(true);
      setTimeout(() => {
        setLoadingBtn(false);
      }, 400);
      setTimeout(() => {
        setCheckCart(false);
      }, 3000);
      return;
    }

    const action = addCart(productInfo);
    dispatch(action);

    localStorage.setItem(
      "cart",
      JSON.stringify([...cartProductArray, productInfo])
    );
    setTimeout(() => {
      setLoadingBtn(false);
      setSuccessAddCart(true);
    }, 400);
    setTimeout(() => {
      setSuccessAddCart(false);
    }, 3000);
  };
  return (
    <>
      <div className="detailProduct__info ">
        <div className="detailProduct__header">
          <h3 className="detailProduct__name">{product.name_product}</h3>
          <div className="detailProduct__price">
            {product.price_product}
            {product.initialPrice != "null" && (
              <span className="initialPrice">{product.initialPrice}</span>
            )}
          </div>
        </div>
        {product.describe && (
          <div className="detailProduct__describer">
            <div className="detailProduct__describer-title">
              Mô tả sản phẩm :
            </div>
            <div className="detailProduct__describer-content">
              {product.describe?.replaceAll("<p>", "")?.replaceAll("</p>", "")}
            </div>
          </div>
        )}
        <div className="detailProduct__support">
          <div className="detailProduct__support-title">
            100% BẠN SẼ HÀI LÒNG
          </div>
          <div className="detailProduct__support-content">
            <div className="row">
              {BoxSupportInFoArray.map((BoxSupport) => {
                return (
                  <div className="col-6 " key={BoxSupport.nameSupport}>
                    <BoxSupportItem BoxSupport={BoxSupport} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="detailProduct__user-buy">
          {product.typeProduct != "phukien" && (
            <ProductSize size={size} setSize={setSize} />
          )}
          <div className="detailProduct__quantity">
            <div className="detailProduct__quantity-title">Số lượng :</div>
            <ProductQuantityInput
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <div className="detailProduct__status">Còn hàng</div>
          </div>
          <div className="detailProduct__btn">
            <div
              className="btn btn__add-to-cart add_cart_sever showModal"
              onClick={handleAddToCart}
            >
              {loadingBtn && <LoadingBtn />}
              {!loadingBtn && (
                <>
                  {" "}
                  <i className="fas fa-shopping-cart"></i>
                  <span>Thêm vào giỏ</span>
                </>
              )}
            </div>
            <Link
              className="btn btn__buyProduct"
              to="/checkout"
              onClick={handleAddToCart}
            >
              Mua ngay
            </Link>
          </div>
        </div>
      </div>

      <div className={successAddCart ? "alert active-alert" : "alert"}>
        <Success
          text={"Thêm sản phẩm vào giỏ hàng thành công !"}
          linkHref={"/cart"}
          linkText={"Đến Giỏ Hàng"}
        />
      </div>

      <div className={checkCart ? "alert active-alert" : "alert"}>
        <Error
          text={"Sản phẩm đã có trong giỏ hàng ."}
          textStrong={"Vui lòng kiểm tra lại !"}
        />
      </div>
    </>
  );
}

export default DetailProductInfo;
