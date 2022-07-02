import { Skeleton } from "@mui/material";

export function ProductsItemSkeleton({ quantity = 4 }) {
  return Array(quantity)
    .fill(null)
    .map((item, i) => {
      return (
        <li
          key={i}
          className="category-products__item col-6 col-sm-4 col-lg-3 "
        >
          <div className=" category-products__item-skeleton">
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={"83%"}
              style={{
                marginBottom: 10,
                marginLeft: 12,
                marginRight: 12,
              }}
            />
            <Skeleton
              animation="wave"
              variant="text"
              width={"80%"}
              style={{ margin: "auto" }}
            />
            <Skeleton
              animation="wave"
              variant="text"
              width={"40%"}
              style={{ margin: "auto", marginTop: 10 }}
            />
          </div>
        </li>
      );
    });
}
