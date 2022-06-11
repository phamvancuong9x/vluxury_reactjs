const totalProduct = (cartProductArray) => {
  const total = cartProductArray.reduce((total, productCurrent) => {
    return total + productCurrent.quantity;
  }, 0);
  return total;
};
export default totalProduct;
