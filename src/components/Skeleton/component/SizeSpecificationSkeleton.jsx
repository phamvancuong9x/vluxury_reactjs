import { Skeleton } from "@mui/material";

export function SizeSpecificationSkeleton() {
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
