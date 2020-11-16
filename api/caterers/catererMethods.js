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
