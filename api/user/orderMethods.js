import axios from "axios";

import { baseUrl } from "../../constants";

export const createPayment = async () => {
  try {
    const token = localStorage.getItem("jwt");

    const response = await axios.post(`${baseUrl}/payments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 201) {
      return;
    }

    return response;
  } catch (error) {
    return;
  }
};

//TODO make this route work properly.
export const placeOrder = async (
  productList,
  catererUsername,
  email,
  deliveryAddress,
  deliveryZipCode,
  deliveryCity,
  phoneNumber,
  paymentId
) => {
  try {
    const token = localStorage.getItem("jwt");
    let customer = JSON.parse(localStorage.getItem("user"));
    let customerUsername = customer.username;

    const response = await axios.post(`${baseUrl}/orders`, {
      productList,
      customerUsername,
      catererUsername,
      email,
      deliveryAddress,
      deliveryZipCode,
      deliveryCity,
      phoneNumber,
      paymentId,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      return;
    }

    return response;
  } catch (error) {
    return;
  }
};

export const getAllOrders = async () => {
  try {
    const token = localStorage.getItem("jwt");
    let customer = JSON.parse(localStorage.getItem("user"));
    let customerUsername = customer.username;

    const response = await axios.get(
      `${baseUrl}/orders/` + customerUsername + "/all",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status !== 200) {
      return;
    }

    return response;
  } catch (error) {
    return;
  }
};
