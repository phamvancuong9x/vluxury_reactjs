import ModalOrder from "./ModalOrder";
import ModalOrderCannel from "./ModalOrderCannel";

function OrderItem({ orderItem }) {
  return (
    <tr>
      <td>{orderItem.id}</td>
      <td>{orderItem.timeOrder}</td>
      <td>Đang chờ xác nhận</td>
      <td>
        <div className="row justify-content-center">
          <div className="col-5 btn-order">
            <ModalOrder orderItem={orderItem} />
          </div>
          <div className="col-5 btn-order">
            <ModalOrderCannel orderItem={orderItem} />
          </div>
        </div>
      </td>
    </tr>
  );
}

export default OrderItem;
