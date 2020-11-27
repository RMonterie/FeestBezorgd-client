import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  total: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
        total: state.total + action.payload.price,
      };
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      const newProducts = [...state.products];
      newProducts.splice(action.payload, 1);
      return {
        ...state,
        products: [...newProducts],
        total: state.total - state.products[action.payload].price,
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

export default cart;
