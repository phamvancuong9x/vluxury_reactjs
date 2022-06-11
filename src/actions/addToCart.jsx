export const addCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
export const changeQuantity = (idProduct, size, quantity) => {
  return {
    type: "CHANGE_QUANTITY_PRODUCT_CART",
    payload: { id: idProduct, size, quantity },
  };
};
export const deleteProduct = (idProduct, size) => {
  return {
    type: "DELETE_PRODUCT",
    payload: { id: idProduct, size },
  };
};
export const deleteAllProduct = () => {
  return {
    type: "DELETE_ALL_PRODUCT",
  };
};
