import { Button } from "@mui/material";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import adminSlice from "../../../../../redux/slice/adminSlice";
import {
  DeleteDataAll,
  WriteOrderShow,
} from "../../../../Checkout/components/constant";
import orderStatusArray from "./constans";
import TableOrderListCannel from "./TableOrderListCannel";
import TableOrderListConfirm from "./TableOrderListConfirm";
import TableOrderListPending from "./TableOrderListPending";

function OrderTable({ initOrderData, setInitOrderData }) {
  const db = getDatabase();
  const newQuantityOder = useSelector((state) => state.admin.newOrderQuantity);
  const [orderListShow, setOrderListShow] = useState([]);
  const [initOrderListShow, setInitOrderListShow] = useState([]);

  const [orderListConfirm, setOrderListConfirm] = useState([]);
  const [orderListCannel, setOrderListCannel] = useState([]);
  const [orderStatus, setOrderStatus] = useState(orderStatusArray[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    onValue(ref(db, "orderShow/"), (snapshot) => {
      const data1 = snapshot.val();
      if (!data1) {
        setOrderListShow([]);
      } else {
        setOrderListShow(Object.values(data1).reverse());
        setInitOrderListShow(data1);
      }
    });
  }, []);
  useEffect(() => {
    onValue(ref(db, "orderConfirm/"), (snapshot) => {
      const data3 = snapshot.val();

      if (!data3) return;
      setOrderListConfirm(Object.values(data3).reverse());
    });
    onValue(ref(db, "orderCannel/"), (snapshot) => {
      const data4 = snapshot.val();

      if (!data4) return;
      setOrderListCannel(Object.values(data4).reverse());
    });
  }, []);
  const handleShowNewOrder = () => {
    if (initOrderListShow.length !== 0) {
      WriteOrderShow({ ...initOrderData, ...initOrderListShow });
    } else {
      WriteOrderShow({ ...initOrderData });
    }
    setOrderStatus(orderStatusArray[0]);
    dispatch(adminSlice.actions.changeQuantityOrder(0));
    DeleteDataAll("/order/");
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
            <Button variant="outlined" disabled>
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
            <th>Trạng thái đơn hàng</th>
            <th>Quản lí đơn hàng</th>
          </tr>
        </thead>
        <tbody>
          {orderStatus === orderStatusArray[0] && (
            <TableOrderListPending orderListShow={orderListShow} />
          )}
          {orderStatus === orderStatusArray[1] && (
            <TableOrderListConfirm orderListConfirm={orderListConfirm} />
          )}
          {orderStatus === orderStatusArray[2] && (
            <TableOrderListCannel orderListCannel={orderListCannel} />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
