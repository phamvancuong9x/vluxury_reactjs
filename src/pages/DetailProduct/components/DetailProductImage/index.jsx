import React, { useEffect, useState } from "react";

function DetailProductImage({ product }) {
  const imageProductArray = product.imageProduct;
  const [urlImage, setUrlImage] = useState(imageProductArray[1]);
  const handleUrlImage = (image) => {
    setUrlImage(image);
  };
  useEffect(() => {
    setUrlImage(imageProductArray[1]);
  }, [product.id]);

  return (
    <div className="detailProduct__image ">
      <div className="row">
        <div className="detailProduct__image-left col-2">
          {imageProductArray.map((image) => {
            return (
              <div
                className={
                  urlImage == image
                    ? "image active-image_detailProduct"
                    : "image"
                }
                key={image}
                onClick={() => handleUrlImage(image)}
              >
                <img src={`${image}`} alt={`Ảnh ${product.name_product}`} />
              </div>
            );
          })}
        </div>
        <div className="detailProduct__image-right col-10">
          <div className="image">
            <img src={`${urlImage}`} alt={`Ảnh ${product.name_product}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProductImage;
