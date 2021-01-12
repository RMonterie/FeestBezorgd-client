import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import { getCurrentCaterer } from "../../api/caterers/catererMethods";
import DetailsForm from "../../components/DetailsForm/DetailsForm";
import BaseLayout from "../../layout/BaseLayout";

const MyDetails = () => {
  const [caterer, setCaterer] = useState([]);
  const [showEditDetails, setShowEditDetails] = useState(false);

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
      <Modal isOpen={showEditDetails}>
        <div>
          <DetailsForm caterer={caterer} />
          <button onClick={() => setShowEditDetails(false)}>Close</button>
        </div>
      </Modal>
      <div>
        <label htmlFor="name">Name: {caterer.name}</label>
        <br></br>
        <label htmlFor="name">Address: {caterer.address}</label>
        <br></br>
        <label htmlFor="name">Email: {caterer.email}</label>
        <br></br>
        <label htmlFor="name">Phone number: {caterer.phoneNumber}</label>

        <button onClick={() => setShowEditDetails(true)}>Edit details</button>
      </div>
    </BaseLayout>
  );
};

export default MyDetails;
