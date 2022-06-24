import ModalOrder from "./ModalOrder";

function OrderItem({ orderItem }) {
  return (
    <tr>
      <td>{orderItem.id}</td>
      <td>{orderItem.timeOrder}</td>
      <td>
        <ModalOrder orderItem={orderItem} />
      </td>
    </tr>
  );
}

export default OrderItem;
