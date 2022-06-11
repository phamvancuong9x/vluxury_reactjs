import React from "react";
import DetailProductImage from "../DetailProductImage";
import DetailProductInfo from "../DetailProductInfo";
import SizeSpecification from "../SizeSpecification";

function DetailProductContent({ product }) {
  return (
    <div id="detailProductContent">
      <div className="detailProduct-container">
        <section className="detailProduct">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                {product && <DetailProductImage product={product} />}
              </div>
              <div className="col-md-7">
                {product && <DetailProductInfo product={product} />}
              </div>
            </div>
          </div>
        </section>
        {/* sizeImage */}
        {product && <SizeSpecification product={product} />}
      </div>
    </div>
  );
}

export default DetailProductContent;
