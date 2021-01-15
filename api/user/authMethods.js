import axios from "axios";

import { baseUrl } from "../../constants";

/**
 * Async function for calling the /authenticate api route
 *
 * @param {string} username
 * @param {string} password
 *
 * @returns {boolean}
 */
export const login = async (username, password) => {
  try {
    const requestUserName = username.toLowerCase();
    console.log(requestUserName);
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
  } catch (error) {
    return;
  }
};

/**
 * Async function for calling the /registerCustomer api route.
 * On successful register automatically logs the user in with the login() function.
 *
 * @param {string} username
 * @param {string} password
 *
 * @returns {boolean}
 */
export const registerCustomer = async ({
  username,
  password,
  email,
  name,
  address,
  phoneNumber,
}) => {
  try {
    const response = await axios.post(`${baseUrl}/customers/signing`, {
      username,
      password,
      email,
      name,
      address,
      phoneNumber,
    });

    if (response.status !== 200) {
      return;
    }

    const successfulLogin = await login(username, password);

    if (successfulLogin) {
      return true;
    }

    return;
  } catch (error) {
    return;
  }
};

export const registerCaterer = async ({
  username,
  password,
  email,
  name,
  address,
  phoneNumber,
}) => {
  try {
    const response = await axios.post(`${baseUrl}/caterers/signing`, {
      username,
      password,
      email,
      name,
      address,
      phoneNumber,
    });

    if (response.status !== 200) {
      return;
    }

    const successfulLogin = await login(username, password);

    if (successfulLogin) {
      return true;
    }
  } catch (error) {
    return;
  }
};
