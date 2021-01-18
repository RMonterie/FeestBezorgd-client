import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isOpen: false,
  type: "",
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        isOpen: true,
        type: action.payload,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        isOpen: false,
        type: "",
      };
    default:
      return state;
  }
};

export default modal;
