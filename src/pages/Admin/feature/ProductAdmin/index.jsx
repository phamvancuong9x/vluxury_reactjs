import React, { useEffect, useState } from "react";
import categoryApi from "../../../../api/categoryApi";
import Loading from "../../../../components/Loading";
import AdminContainer from "../../components/AdminContainer";
import TableInfo from "../../components/TableInfo";
import ModalAddProduct from "./components/ModalAddProduct";
import "./styles.scss";
function ProductAdmin({ tab, isChange, setIsChange }) {
  const [productList, setProductList] = useState();
  const [loading, setLoading] = useState(true);
  const params = { ...tab[0].param };

  let id;
  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const list = await categoryApi.getAll(params);

        setProductList(list.reverse());
        id = setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      clearTimeout(id);
    };
  }, [isChange]);
  return (
    <AdminContainer title={tab[0].typeProducts}>
      {loading && <Loading />}
      <TableInfo
        tab={tab}
        type="categoryProduct"
        Data={productList}
        isChange={isChange}
        setIsChange={setIsChange}
      >
        <ModalAddProduct isChange={isChange} setIsChange={setIsChange} />
      </TableInfo>
    </AdminContainer>
  );
}

export default ProductAdmin;
