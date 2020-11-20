import axios from "axios";

import { baseUrl } from "../../constants";

/**
 * Async function for calling the /authenticate api route
 *
 * @param {string} username
 * @param {string} password
 *
 * @return {boolean}
 */
export const login = async (username, password) => {
  const response = await axios.post(`${baseUrl}/authenticate`, {
    username,
    password,
  });

  if (!response.data.jwt || response.status !== 200) {
    return;
  }

  const user = JSON.stringify(response.data.userDetailsForm);
  const jwt = response.data.jwt;

  localStorage.setItem("user", user);
  localStorage.setItem("jwt", jwt);

  return true;
};

/**
 * Async function for calling the /registerCustomer api route.
 * On successful register automatically logs the user in with the login() function.
 *
 * @param {string} username
 * @param {string} password
 *
 * @return {boolean}
 */
export const register = async (username, password) => {
  const response = await axios.post(`${baseUrl}/registerCustomer`, {
    username,
    password,
  });

  if (response.status !== 200) {
    return;
  }

  const successfulLogin = await login(username, password);

  if (successfulLogin) {
    return true;
  }

  return;
};
