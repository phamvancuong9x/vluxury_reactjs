function OrderConfirmItem({ orderItem, children, text }) {
  return (
    <tr>
      <td>{orderItem.id}</td>
      <td>{orderItem.timeOrder}</td>
      <td>{text}</td>
      <td>{children}</td>
    </tr>
  );
}

export default OrderConfirmItem;
