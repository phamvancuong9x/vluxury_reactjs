import React from "react";
import ModalOrder from "./ModalOrder";
import OrderConfirmItem from "./OrderConfirmItem";
import OrderTableEmpty from "./OrderTableEmpty";

function TableOrderListConfirm({ orderListConfirm }) {
  if (orderListConfirm.length === 0)
    return <OrderTableEmpty text={"Chưa có đơn được xác nhận !"} />;
  return orderListConfirm?.map((orderItem, i) => {
    return (
      <OrderConfirmItem
        orderItem={orderItem}
        key={orderItem.id + i}
        text="Đã xác nhận , đang chờ giao hàng"
      >
        <ModalOrder orderItem={orderItem} confirm={false} />
      </OrderConfirmItem>
    );
  });
}

export default TableOrderListConfirm;
