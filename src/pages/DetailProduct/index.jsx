import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import alertSlice from "../../redux/slice/alertSlice";
import DetailProductContent from "./components/DetailProductContent";
import SimilarProduct from "./components/SimilarProduct";
import "./styles.scss";

function DetailProduct() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const product = await categoryApi.get(params.idProduct);
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch product ", error.name);
        setLoading(true);
        dispatch(
          alertSlice.actions.changeAlertError({
            showAlertError: true,
            alertContentError:
              "Mất kết nối tới server .Vui lòng tải lại trang !",
          })
        );
      }
    })();
  }, [params.idProduct]);
  return (
    <>
      <>
        <Breadcrumbs title={product?.name_product} />
        <div className="detail_content">
          <DetailProductContent product={product} loading={loading} />

          <SimilarProduct product={product} loading={loading} />
        </div>
      </>
    </>
  );
}

export default DetailProduct;
