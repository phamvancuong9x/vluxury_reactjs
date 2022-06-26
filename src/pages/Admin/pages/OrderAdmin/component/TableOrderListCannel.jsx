import React from "react";
import ModalOrder from "./ModalOrder";
import ModalOrderReason from "./ModalOrderReason";
import OrderConfirmItem from "./OrderConfirmItem";
import OrderTableEmpty from "./OrderTableEmpty";

function TableOrderListCannel({ orderListCannel }) {
  if (orderListCannel.length === 0) {
    return <OrderTableEmpty text={"Chưa có đơn đã hủy !"} />;
  }
  return orderListCannel?.map((orderItem) => {
    return (
      <OrderConfirmItem orderItem={orderItem} key={orderItem.id} text=" Đã hủy">
        <div className="row justify-content-center">
          <div className="col-5 btn-order">
            <ModalOrder
              orderItem={orderItem}
              confirm={false}
              reasonCannel={true}
            />
          </div>
          <div className="col-5 btn-order">
            <ModalOrderReason orderItem={orderItem} />
          </div>
        </div>
      </OrderConfirmItem>
    );
  });
}

export default TableOrderListCannel;
