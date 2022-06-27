import React from "react";
import OrderItem from "./OderItem";
import OrderTableEmpty from "./OrderTableEmpty";

function TableOrderListPending({ orderListShow }) {
  if (orderListShow.length === 0)
    return <OrderTableEmpty text={"Chưa có đơn mới được cập nhật !"} />;
  return orderListShow?.map((orderItem, i) => {
    return <OrderItem orderItem={orderItem} key={orderItem.id + i + i} />;
  });
}

export default TableOrderListPending;
