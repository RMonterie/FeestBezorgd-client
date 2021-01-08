import React, { useEffect, useState } from "react";
import {
  getAllCaterers,
  getCurrentCaterer,
} from "../../api/caterers/catererMethods";
import BaseLayout from "../../layout/BaseLayout";

const MyDetails = () => {
  const [caterer, setCaterer] = useState([]);

  useEffect(() => {
    const getCaterer = async () => {
      const response = await getCurrentCaterer();
      setCaterer(response.data);
      console.log(response.data);
    };

    getCaterer();
  }, []);

  return (
    <BaseLayout title="My Details">
      <div>
        <label htmlFor="name">Name: {caterer.name}</label>
        <br></br>
        <label htmlFor="name">Address: {caterer.address}</label>
        <br></br>
        <label htmlFor="name">Email: {caterer.email}</label>
        <br></br>
        <label htmlFor="name">Phone number: {caterer.phoneNumber}</label>
      </div>
    </BaseLayout>
  );
};

export default MyDetails;
