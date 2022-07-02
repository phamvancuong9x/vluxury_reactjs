import { Skeleton } from "@mui/material";

export function InfoDetailProductSkeleton() {
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
