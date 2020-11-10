import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
};

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};

export default Cart;
