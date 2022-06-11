import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../actions/addToCart";

export function CartRemove({ product }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    const action = deleteProduct(product.id, product.size);
    dispatch(action);
  };
  return (
    <div className="cart-remove" onClick={handleRemove}>
      <i className="fas fa-trash-alt"></i>
    </div>
  );
}
