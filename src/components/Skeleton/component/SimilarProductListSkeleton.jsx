import { Skeleton } from "@mui/material";
import { ProductsItemSkeleton } from "..";

export function SimilarProductListSkeleton() {
  return (
    <div className="container">
      <Skeleton
        animation="wave"
        variant="text"
        width={"30%"}
        style={{ margin: "auto", marginBottom: 20, marginTop: 40 }}
      />
      <div className="row">
        <ProductsItemSkeleton />
      </div>
      <Skeleton
        animation="wave"
        variant="text"
        width={"15%"}
        style={{ margin: "auto", marginBottom: 20 }}
      />
    </div>
  );
}
