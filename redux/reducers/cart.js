import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  total: 0,
};

// Reducer that handles the various actions that a user can perform.
const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      const productFound = state.products.findIndex(
        (product) => product.name == action.payload.name
      );
      console.log(action.payload);
      if (productFound !== -1) {
        const newProducts = [...state.products];
        newProducts[productFound].quantity += 1;
        console.log(newProducts);
        return {
          ...state,
          products: [...newProducts],
          total: state.total + action.payload.price,
        };
      }
      return {
        ...state,
        products: [...state.products, action.payload],
        total: state.total + action.payload.price,
      };
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      const newProducts = [...state.products];
      if (newProducts[action.payload].quantity > 1) {
        newProducts[action.payload].quantity -= 1;
      } else {
        newProducts.splice(action.payload, 1);
      }
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
