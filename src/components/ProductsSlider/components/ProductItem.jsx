import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
function ProductItem({ product }) {
  return (
    <Link
      to={`/detail-product/${product.id}`}
      className="featured-products__item col-md-3 col-lg-3"
      data-id={product.id}
    >
      <div className="featured-products__image">
        <LazyLoad height={400} offset={400}>
          <img
            src={`${product.imageProduct[1]}`}
            alt="featured-products image"
          />
        </LazyLoad>

        {product.discount_sale != "null" ? (
          <div className="discount">{product.discount_sale}</div>
        ) : undefined}
      </div>
      <div className="featured-products__name">{product.name_product}</div>
      <div className="featured-products__price">
        {product.price_product}
        {product.initialPrice != "null" ? (
          <span className="initialPrice">{product.initialPrice}</span>
        ) : undefined}
      </div>
    </Link>
  );
}

export default ProductItem;
