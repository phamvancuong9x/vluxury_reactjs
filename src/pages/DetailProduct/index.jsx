import React, { useEffect, useRef, useState } from "react";
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
  const IdTimeout = useRef();
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const product = await categoryApi.get(params.idProduct);
        setProduct(product);
        IdTimeout.current = setTimeout(() => {
          setLoading(false);
        }, 200);
      } catch (error) {
        console.log("Failed to fetch product ", error);
        setIsPage(false);
      }
    })();
    return () => {
      clearTimeout(IdTimeout.current);
    };
  }, [params.idProduct]);
  return (
    <>
      {isPage ? (
        <>
          <Breadcrumbs title={product?.name_product} />
          <div className="detail_content">
            {loading && <Loading />}
            {product && <DetailProductContent product={product} />}
            {product && <SimilarProduct product={product} />}
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default DetailProduct;
