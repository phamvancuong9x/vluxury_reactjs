import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import addToCartSlice from "../../../redux/slice/addToCartSlice";

export function QuanTityProduct({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };
  const handleChange = (e) => {
    if (Number.isInteger(+e.target.value) === false || +e.target.value <= 0) {
      return;
    }
    setQuantity(+e.target.value);
  };
  useEffect(() => {
    const action = addToCartSlice.actions.CHANGE_QUANTITY_PRODUCT_CART({
      id: product.id,
      size: product.size,
      quantity,
    });
    dispatch(action);
  }, [quantity]);

  return (
    <div className="detailProduct__quantity-input">
      <input
        className="product__quantity"
        type="text"
        value={quantity}
        name="quantity"
        maxLength="3"
        required=""
        onChange={(e) => handleChange(e)}
      />
      <span
        className="icon-minus-modal icon-quantity-modal"
        onClick={handleDecrease}
      >
        <i className="fas fa-minus"></i>
      </span>
      <span
        className="icon-plus-modal icon-quantity-modal"
        onClick={handleIncrease}
      >
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
}
