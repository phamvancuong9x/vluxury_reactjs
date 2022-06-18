export const addQuantityProductCart = (cartProductArray, productCurrent) => {
  const result = cartProductArray.map((product) => {
    if (
      product.id === productCurrent.id &&
      product.size === productCurrent.size
    )
      return {
        id: product.id,
        image: product.image,
        nameProduct: product.nameProduct,
        priceNumber: product.priceNumber,
        price_product: product.price_product,
        quantity: product.quantity + productCurrent.quantity,
        size: product.size,
      };
    return product;
  });
  return result;
};
