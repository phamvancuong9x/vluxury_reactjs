import { DetailProductImageSkeleton } from "../../../../components/Skeleton/component/DetailProductImageSkeleton";
import { InfoDetailProductSkeleton } from "../../../../components/Skeleton/component/InfoDetailProductSkeleton";
import { SizeSpecificationSkeleton } from "../../../../components/Skeleton/component/SizeSpecificationSkeleton";
import DetailProductImage from "../DetailProductImage";
import DetailProductInfo from "../DetailProductInfo";
import SizeSpecification from "../SizeSpecification";

function DetailProductContent({ product, loading }) {
  return (
    <div id="detailProductContent">
      <div className="detailProduct-container">
        <section className="detailProduct">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                {!loading && product && (
                  <DetailProductImage product={product} loading={loading} />
                )}
                {loading && <DetailProductImageSkeleton />}
              </div>
              <div className="col-md-7">
                {!loading && product && <DetailProductInfo product={product} />}
                {loading && <InfoDetailProductSkeleton />}
              </div>
            </div>
          </div>
        </section>
        {/* sizeImage */}
        {loading && <SizeSpecificationSkeleton />}
        {!loading && product && <SizeSpecification product={product} />}
      </div>
    </div>
  );
}

export default DetailProductContent;
