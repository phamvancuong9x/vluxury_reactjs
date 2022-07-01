import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import Loading from "../../components/Loading";
import NotFound from "../NotFound";
import DetailProductContent from "./components/DetailProductContent";
import SimilarProduct from "./components/SimilarProduct";
import "./styles.scss";

function DetailProduct() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [isPage, setIsPage] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const product = await categoryApi.get(params.idProduct);
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch product ", error);
        setIsPage(false);
        setLoading(false);
      }
    })();
  }, [params.idProduct]);
  return (
    <>
      {isPage ? (
        <>
          <Breadcrumbs title={product?.name_product} />
          <div className="detail_content">
            <DetailProductContent product={product} loading={loading} />

            <SimilarProduct product={product} loading={loading} />
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default DetailProduct;
