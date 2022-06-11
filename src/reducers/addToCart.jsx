const initCart =
  (!!localStorage.getItem("cart") &&
    JSON.parse(localStorage.getItem("cart"))) ||
  [];

const addToCart = (state = initCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newCartProduct = [...state, action.payload];
      return newCartProduct;
    }
    case "CHANGE_QUANTITY_PRODUCT_CART": {
      const newCartProduct = state.map((product) => {
        if (
          product.id === action.payload.id &&
          product.size === action.payload.size
        )
          return { ...product, ...action.payload };
        return product;
      });
      return newCartProduct;
    }
    case "DELETE_PRODUCT": {
      const newCartProduct = state.filter((product) => {
        return (
          product.id !== action.payload.id ||
          (product.id === action.payload.id &&
            product.size !== action.payload.size)
        );
      });
      return newCartProduct;
    }
    case "DELETE_ALL_PRODUCT":
      return [];
    default:
      return state;
  }
};
export default addToCart;
