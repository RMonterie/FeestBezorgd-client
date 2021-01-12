import React, { useState } from "react";

import { editCatererDetails } from "../../api/caterers/catererMethods";

const DetailsForm = ({ caterer }) => {
  const [name, setName] = useState(caterer.name);
  const [email, setEmail] = useState(caterer.email);
  const [address, setAddress] = useState(caterer.address);
  const [phoneNumber, setPhoneNumber] = useState(caterer.phoneNumber);
  const onSubmitHandler = () => {
    editCatererDetails(name, email, address, phoneNumber);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <label htmlFor="phonenumber">Phonenumber</label>
        <input
          type="text"
          name="phonenumber"
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
        <button type="submit">Edit details</button>;
      </form>
    </div>
  );
};

export default DetailsForm;
