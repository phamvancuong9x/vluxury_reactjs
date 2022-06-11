export const checkProductCart = (cartProductArray, productCurrent) => {
  const result = cartProductArray.some((product) => {
    return (
      product.id == productCurrent.id && product.size == productCurrent.size
    );
  });
  return result;
};
