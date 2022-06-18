import { addQuantityProductCart } from "../pages/DetailProduct/components/DetailProductInfo/addQuanityProductCart";
import { checkProductCart } from "../pages/DetailProduct/components/DetailProductInfo/checkProductCart";

const initCart = JSON.parse(localStorage.getItem("cart")) || false || [];

const addToCart = (state = initCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (checkProductCart(state, action.payload)) {
        return addQuantityProductCart(state, action.payload);
      } else {
        const newCartProduct = [...state, action.payload];
        return newCartProduct;
      }
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
