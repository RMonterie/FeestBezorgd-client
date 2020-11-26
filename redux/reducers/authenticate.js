import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true,
      };
    case actionTypes.DEAUTHENTICATE:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authentication;
