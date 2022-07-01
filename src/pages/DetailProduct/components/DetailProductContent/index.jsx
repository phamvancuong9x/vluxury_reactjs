import { Skeleton } from "@mui/material";
import DetailProductImage from "../DetailProductImage";
import DetailProductInfo from "../DetailProductInfo";
import SizeSpecification from "../SizeSpecification";

function InfoDetailProductSkeleton() {
  return (
    <>
      <div className="detailProduct__info ">
        <Skeleton animation="wave" variant="text" width={"60%"} />
        <Skeleton
          animation="wave"
          variant="text"
          width={"20%"}
          style={{ marginTop: 15 }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width={"30%"}
          style={{ marginTop: 5, marginBottom: 5 }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={"102px"}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width={"20%"}
          style={{ marginTop: 20, marginBottom: 10 }}
        />
        <div className="row">
          {Array(4)
            .fill(null)
            .map((value, i) => {
              return (
                <div className="col-6" key={i}>
                  <div className="" style={{ padding: "1px" }}>
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width={"100%"}
                      height={"64px"}
                      style={{ marginRight: 5 }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"50%"}
          height={"35px"}
          style={{ marginTop: 20 }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"50%"}
          height={"35px"}
          style={{ marginTop: 20 }}
        />
        <div className="row">
          <div className="col-12 col-sm-3">
            <div style={{ paddingRight: 18 }}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={"56px"}
                style={{ marginTop: 20 }}
              />
            </div>
          </div>
          <div className="col-12 col-sm-3">
            <div style={{ paddingRight: 18 }}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={"56px"}
                style={{ marginTop: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function SizeSpecificationSkeleton() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-sm-2 col-4">
          <div style={{ paddingRight: 18 }}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={"40px"}
              style={{ marginTop: 20 }}
            />
          </div>
        </div>
        <div className="col-lg-2 col-sm-2 col-4">
          <div style={{ paddingRight: 18 }}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={"40px"}
              style={{ marginTop: 20 }}
            />
          </div>
        </div>
      </div>
      <div className="sizeSpecification-image-skeleton">
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          style={{ marginTop: 20, marginBottom: 30 }}
        />
      </div>
    </div>
  );
}
function DetailProductImageSkeleton() {
  return (
    <div className="detailProduct__image ">
      <div className="row">
        <div className="detailProduct__image-left col-2">
          {Array(4)
            .fill(null)
            .map((value, i) => {
              return (
                <div className={"image_product_left-skeleton"} key={i}>
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    height={"90%"}
                  />
                </div>
              );
            })}
        </div>
        <div className="detailProduct__image-right col-10">
          {
            <div className={"image_product_right-skeleton"}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={"100%"}
              />
            </div>
          }
        </div>
      </div>
    </div>
  );
}
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
