import { Skeleton } from "@mui/material";

export function DetailProductImageSkeleton() {
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
