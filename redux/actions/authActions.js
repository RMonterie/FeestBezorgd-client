import * as actionTypes from "./actionTypes";

export const authenticate = () => {
  return {
    type: actionTypes.AUTHENTICATE,
  };
};

export const deAuthenticate = () => {
  return {
    type: actionTypes.DEAUTHENTICATE,
  };
};
