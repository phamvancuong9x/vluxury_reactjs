import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../actions/addToCart";
import {
  setIdShowConfirm,
  setShowNotifyDeleteProduct,
} from "../../../actions/cart";

import { Confirm } from "../../Admin/components/Confirm";
import { useSelector } from "react-redux";
export function CartRemove({ product }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const idShowConfirm = useSelector((state) => state.Cart.idShowConfirm);
  const dispatch = useDispatch();

  const handleConfirmYes = () => {
    setShowConfirmDelete(false);
    const action = deleteProduct(product.id, product.size);
    dispatch(action);
    dispatch(setShowNotifyDeleteProduct(true));

    setTimeout(() => {
      dispatch(setShowNotifyDeleteProduct(false));
    }, 1000);
  };
  const handleConfirmNo = () => {
    setShowConfirmDelete(false);
    dispatch(setIdShowConfirm({ ...idShowConfirm, id: null, size: null }));
  };
  const handleShowConfirm = () => {
    dispatch(setShowNotifyDeleteProduct(false));
    dispatch(
      setIdShowConfirm({ ...idShowConfirm, id: product.id, size: product.size })
    );
    setShowConfirmDelete(true);
  };
  return (
    <>
      <div className="cart-remove" onClick={handleShowConfirm}>
        <i className="fas fa-trash-alt"></i>
      </div>

      {showConfirmDelete &&
        idShowConfirm?.id == product.id &&
        idShowConfirm?.size == product.size && (
          <Confirm
            id={product.id}
            handleConfirmYes={handleConfirmYes}
            handleConfirmNo={handleConfirmNo}
          />
        )}
    </>
  );
}
