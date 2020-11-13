import axios from "axios";

import { baseUrl } from "../../constants";

export const getAllCaterers = async () => {
  const token = JSON.parse(localStorage.getItem("jwt"));

  const response = await axios.get(`${baseUrl}/caterers`, {
    headers: {
      Authorization: `Bearer ${token.jwt}`,
    },
  });

  if (response !== null) {
    return response;
  }

  return;
};
