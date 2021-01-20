import axios from "axios";

import { baseUrl } from "../../constants";

export const getAllCaterers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/caterers/list`);
    if (response !== null) {
      return response;
    }
  } catch (error) {
    return;
  }
};

export const getCurrentCaterer = async () => {
  const token = localStorage.getItem("jwt");
  let caterer = JSON.parse(localStorage.getItem("user"));
  let catererUsername = caterer?.username;

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

export const addProductToCatalogue = async (name, price, imageUrl) => {
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
      imageUrl,
    });

    if (response !== null) {
      return response;
    }
  }

  return;
};

export const removeProductFromCatalogue = async (name) => {
  const token = localStorage.getItem("jwt");
  let caterer = JSON.parse(localStorage.getItem("user"));
  let catererUsername = caterer.username;

  if (token !== null) {
    const response = await axios.delete(
      `${baseUrl}/caterers/${catererUsername}/products/${name}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response !== null) {
      return response;
    }
  }

  return;
};

export const editProductFromCatalogue = async (
  productId,
  name,
  price,
  imageUrl
) => {
  const token = localStorage.getItem("jwt");
  let caterer = JSON.parse(localStorage.getItem("user"));
  let catererUsername = caterer.username;

  if (token !== null) {
    const response = await axios.put(
      `${baseUrl}/caterers/products/edit/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        catererUsername,
        name,
        price,
        imageUrl,
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
  const caterer = JSON.parse(localStorage.getItem("user"));
  const username = caterer.username;

  if (token !== null) {
    const response = await axios.put(`${baseUrl}/caterers/details`, {
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

export const editWorkingTimes = async (
  workingDays,
  openingTime,
  closingTime
) => {
  const token = localStorage.getItem("jwt");
  const caterer = JSON.parse(localStorage.getItem("user"));
  const username = caterer.username;

  if (token !== null) {
    const response = await axios.put(`${baseUrl}/caterers/working`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      username,
      workingDays,
      openingTime,
      closingTime,
    });

    if (response !== null) {
      return response;
    }
  }

  return;
};
