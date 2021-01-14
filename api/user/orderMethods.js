import axios from "axios";

import { baseUrl } from "../../constants";

//TODO make this route work properly.
export const placeOrder = (userDetails, products) => {
    try {
        const token = localStorage.getItem("jwt");

        const response = await axios.post(`${baseUrl}/order`, {
          userDetails, 
          products, 
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
    
        if (response.status !== 200) {
          return;
        }

        return true;
      } catch (error) {
        return;
      }
    };