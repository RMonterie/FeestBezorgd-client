import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const addProductToCart = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};