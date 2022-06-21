import { useState } from "react";
import { useDispatch } from "react-redux";
import { Confirm } from "../../Admin/components/Confirm";
import { useSelector } from "react-redux";
import addToCartSlice from "../../../redux/slice/addToCartSlice";
import cartSlice from "../../../redux/slice/cartSlice";

export function CartRemove({ product }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const idShowConfirm = useSelector((state) => state.Cart.idShowConfirm);
  const dispatch = useDispatch();

  const handleConfirmYes = () => {
    setShowConfirmDelete(false);
    const action = addToCartSlice.actions.DELETE_PRODUCT({
      id: product.id,
      size: product.size,
    });
    dispatch(action);
    dispatch(cartSlice.actions.showNotifyDelete(true));

    setTimeout(() => {
      dispatch(cartSlice.actions.showNotifyDelete(false));
    }, 1000);
  };
  const handleConfirmNo = () => {
    setShowConfirmDelete(false);
  };
  const handleShowConfirm = () => {
    dispatch(cartSlice.actions.showNotifyDelete(false));
    dispatch(
      cartSlice.actions.IdShowConfirm({
        ...idShowConfirm,
        id: product.id,
        size: product.size,
      })
    );
    setShowConfirmDelete(true);
  };
  return (
    <>
      <div className="cart-remove" onClick={handleShowConfirm}>
        <i className="fas fa-trash-alt"></i>
      </div>

      {showConfirmDelete &&
        idShowConfirm?.id === product.id &&
        idShowConfirm?.size === product.size && (
          <Confirm
            id={product.id}
            handleConfirmYes={handleConfirmYes}
            handleConfirmNo={handleConfirmNo}
          />
        )}
    </>
  );
}
