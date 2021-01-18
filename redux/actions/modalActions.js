import * as actionTypes from "./actionTypes";

export const openModal = (modalType) => {
  return {
    type: actionTypes.OPEN_MODAL,
    payload: modalType,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};
