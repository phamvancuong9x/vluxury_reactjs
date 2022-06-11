import { Link } from "react-router-dom";

export function CartEmpty() {
  return (
    <div className="cart-empty">
      <p>Giỏ hàng trống </p>
      <p>
        Tiếp tục mua hàng
        <Link to="/">tại đây</Link>
      </p>
    </div>
  );
}
