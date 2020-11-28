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

export const addProductToCatalogue = async (name, price) => {
  const token = localStorage.getItem("jwt");

  if (token !== null) {
    const response = await axios.post(`${baseUrl}/caterers/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      catererUsername: "admin",
      name,
      price,
    });

    if (response !== null) {
      return response;
    }
  }

  return;
};
