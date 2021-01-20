import axios from "axios";

import { baseUrl } from "../../constants";

export const editCustomerDetails = async (
  name,
  email,
  address,
  phoneNumber
) => {
  const token = localStorage.getItem("jwt");
  const customer = JSON.parse(localStorage.getItem("user"));
  const username = customer.username;

  if (token !== null) {
    const response = await axios.put(`${baseUrl}/customers/details`, {
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
