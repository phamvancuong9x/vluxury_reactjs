import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import ProductItem from "./components/ProductItem";
import "./styles.scss";
function ProductsSlider({ productArray }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="tab-content">
      <Slider {...settings}>
        {productArray.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </Slider>
      <Link
        to={`/category-product?typeProduct=${productArray[0].typeProduct}&isSale=${productArray[0].isSale}`}
        className="tab__btn tab1-content__btn bttn wow animate__animated animate__fadeInUp typeProduct"
      >
        XEM THÊM
      </Link>
    </div>
  );
}

export default ProductsSlider;
