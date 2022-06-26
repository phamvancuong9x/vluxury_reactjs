import React from "react";

function OrderTableEmpty({ text }) {
  return (
    <tr>
      <td></td>
      <td></td>
      <td>{text}</td>
      <td></td>
    </tr>
  );
}

export default OrderTableEmpty;
