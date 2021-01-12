import axios from "axios";

import { baseUrl } from "../../constants";

export const getAllCaterers = async () => {
  const token = localStorage.getItem("jwt");

  if (token !== null) {
    const response = await axios.get(`${baseUrl}/caterers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response !== null) {
      return response;
    }
  }

  return;
};

export const getCurrentCaterer = async () => {
  const token = localStorage.getItem("jwt");
  let caterer = JSON.parse(localStorage.getItem("user"));
  let catererUsername = caterer.username;

  if (token !== null) {
    const response = await axios.get(`${baseUrl}/caterers/${catererUsername}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response !== null) {
      return response;
    }
  }

  return;
};

export const addProductToCatalogue = async (name, price) => {
  const token = localStorage.getItem("jwt");
  let caterer = JSON.parse(localStorage.getItem("user"));
  let catererUsername = caterer.username;

  if (token !== null) {
    const response = await axios.post(`${baseUrl}/caterers/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      catererUsername: catererUsername,
      name,
      price,
    });

    if (response !== null) {
      return response;
    }
  }

  return;
};

export const removeProductFromCatalogue = async (name, price) => {
  const token = localStorage.getItem("jwt");
  let caterer = JSON.parse(localStorage.getItem("user"));
  let catererUsername = caterer.username;

  if (token !== null) {
    const response = await axios.post(`${baseUrl}/caterers/products/delete`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      catererUsername: catererUsername,
      name,
      price,
    });

    if (response !== null) {
      return response;
    }
  }

  return;
};

export const editProductFromCatalogue = async (productId, name, price) => {
  const token = localStorage.getItem("jwt");
  let caterer = JSON.parse(localStorage.getItem("user"));
  let catererUsername = caterer.username;

  if (token !== null) {
    const response = await axios.post(
      `${baseUrl}/caterers/products/edit/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        catererUsername: catererUsername,
        name,
        price,
      }
    );

    if (response !== null) {
      return response;
    }
  }

  return;
};

export const editCatererDetails = async (name, email, address, phoneNumber) => {
  const token = localStorage.getItem("jwt");
  let caterer = JSON.parse(localStorage.getItem("user"));
  let username = caterer.username;

  if (token !== null) {
    const response = await axios.post(`${baseUrl}/caterers/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      username,
      name,
      email,
      address,
      phoneNumber,
    });

    if (response !== null) {
      return response;
    }
  }

  return;
};
