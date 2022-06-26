import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import adminSlice from "../../../../redux/slice/adminSlice";
import AdminContainer from "../../components/AdminContainer";
import OrderTable from "./component/OrderTable";
import "./styles.scss";
function OrderAdmin({ tab }) {
  const db = getDatabase();
  const dispatch = useDispatch();
  const [initOrderData, setInitOrderData] = useState();

  useEffect(() => {
    onValue(ref(db, "order/"), (snapshot) => {
      const data1 = snapshot.val();
      if (!data1) return;
      dispatch(
        adminSlice.actions.changeOrderList(Object.values(data1).reverse())
      );
      dispatch(
        adminSlice.actions.changeQuantityOrder(Object.values(data1).length)
      );

      setInitOrderData(data1);
    });
  }, []);

  return (
    <AdminContainer title={tab}>
      <OrderTable
        initOrderData={initOrderData}
        setInitOrderData={setInitOrderData}
      />
    </AdminContainer>
  );
}

export default OrderAdmin;
