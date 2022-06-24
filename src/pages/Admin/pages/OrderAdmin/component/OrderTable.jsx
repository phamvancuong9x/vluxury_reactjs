import { Button } from "@mui/material";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import adminSlice from "../../../../../redux/slice/adminSlice";
import { WriteOrderShow } from "../../../../Checkout/components/constant";
import orderStatusArray from "./constans";
import OrderItem from "./OderItem";
import OrderConfirmItem from "./OrderConfirmItem";
function OrderTable({ initOrderData }) {
  const db = getDatabase();
  const orderList = useSelector((state) => state.admin.orderList);
  const newQuantityOder = useSelector((state) => state.admin.newOrderQuantity);
  const [orderListShow, setOrderListShow] = useState([]);
  const [orderListConfirm, setOrderListConfirm] = useState([]);
  const [orderListCannel, setOrderListCannel] = useState([]);
  const [orderStatus, setOrderStatus] = useState(orderStatusArray[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    onValue(ref(db, "orderShow/"), (snapshot) => {
      const data1 = snapshot.val();
      if (!data1 && !orderList) {
        setOrderListShow([]);

        dispatch(adminSlice.actions.changeQuantityOrder(0));
        return;
      } else if (orderList && !data1) {
        dispatch(adminSlice.actions.changeQuantityOrder(orderList.length));
      } else if (
        orderList?.length &&
        orderList?.length - Object.values(data1).length !== NaN
      ) {
        setOrderListShow(Object?.values(data1).reverse());
        dispatch(
          adminSlice.actions.changeQuantityOrder(
            orderList?.length - Object.values(data1).length
          )
        );
        dispatch(
          adminSlice.actions.changeQuantityOrder(
            orderList?.length - Object.values(data1).length
          )
        );
      }
    });
  }, [orderList]);
  useEffect(() => {
    onValue(ref(db, "orderConfirm/"), (snapshot) => {
      const data3 = snapshot.val();

      if (!data3) return;
      setOrderListConfirm(Object.values(data3));
    });
    onValue(ref(db, "orderCannel/"), (snapshot) => {
      const data4 = snapshot.val();

      if (!data4) return;
      setOrderListCannel(Object.values(data4));
    });
  }, []);
  const handleShowNewOrder = () => {
    WriteOrderShow(initOrderData);
    setOrderStatus(orderStatusArray[0]);
  };
  return (
    <div className="order_table admin-container-content">
      <div className="order_manager">
        <span className="btn_new_order">
          {(newQuantityOder !== 0 && (
            <Button variant="outlined" onClick={handleShowNewOrder}>
              Đơn mới
              <span className="new_quantity_oder">{newQuantityOder}</span>
            </Button>
          )) || (
            <Button variant="outlined" disabled onClick={handleShowNewOrder}>
              Đơn mới
            </Button>
          )}
        </span>
        <span className="btn_select_order">
          <select onChange={(e) => setOrderStatus(e.target.value)}>
            {orderStatusArray.map((statusItem) => {
              return (
                <option value={statusItem} key={statusItem}>
                  {statusItem}
                </option>
              );
            })}
          </select>
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Thời gian</th>
            <th>Quản lí đơn hàng</th>
          </tr>
        </thead>
        <tbody>
          {orderStatus === orderStatusArray[0] &&
            orderListShow?.map((orderItem) => {
              return <OrderItem orderItem={orderItem} key={orderItem.id} />;
            })}
          {orderStatus === orderStatusArray[1] &&
            orderListConfirm?.map((orderItem) => {
              return (
                <OrderConfirmItem orderItem={orderItem} key={orderItem.id}>
                  Đã xác nhận , đang chờ giao hàng
                </OrderConfirmItem>
              );
            })}
          {orderStatus === orderStatusArray[2] &&
            orderListCannel?.map((orderItem) => {
              return (
                <OrderConfirmItem orderItem={orderItem} key={orderItem.id}>
                  Đã hủy
                </OrderConfirmItem>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
