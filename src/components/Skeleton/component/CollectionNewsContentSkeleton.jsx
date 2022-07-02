import { Skeleton } from "@mui/material";
import React from "react";

function CollectionNewsContentSkeleton() {
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-5 col-lg-6 collection-news__image">
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={"555px"}
          style={{ marginTop: 20 }}
        />
      </div>

      <div className="col-sm-6 col-md-7 col-lg-6">
        <div className="collection-news__item">
          <div className="row">
            {Array(4)
              .fill(null)
              .map((value, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="col-3">
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width={"100%"}
                        height={"124px"}
                        style={{ marginTop: 20 }}
                      />
                    </div>
                    <div className="col-8">
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width={"100%"}
                        height={"124px"}
                        style={{ marginTop: 20 }}
                      />
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionNewsContentSkeleton;
