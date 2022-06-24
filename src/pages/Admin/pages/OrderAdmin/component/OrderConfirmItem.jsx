import ModalOrder from "./ModalOrder";

function OrderConfirmItem({ orderItem, children }) {
  return (
    <tr>
      <td>{orderItem.id}</td>
      <td>{orderItem.timeOrder}</td>
      <td>{children}</td>
    </tr>
  );
}

export default OrderConfirmItem;
