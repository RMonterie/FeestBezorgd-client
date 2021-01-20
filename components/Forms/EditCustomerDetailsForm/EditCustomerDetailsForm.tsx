import React from "react";
import { useForm } from "react-hook-form";
import { faSave } from "@fortawesome/free-solid-svg-icons";

import { editCustomerDetails } from "../../../api/user/customerMethods";
import Button from "../../Button";

import "./EditCustomerDetailsForm.scss";

const EditCustomerDetailsForm = () => {
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onBlur",
  });

  const onSubmitHandler = async (data) => {
    event.preventDefault();
    const response = await editCustomerDetails(
      data.name,
      data.email,
      data.address,
      data.phoneNumber
    );
    if (response) {
      console.log(response);
    }
  };

  return (
    <form
      className="edit-customer-details-form"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h2>Edit your details</h2>
      <div className="customer-details-inputs">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" ref={register({ required: true })} />
          {errors.name && (
            <span className="warning">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" ref={register({ required: true })} />
          {errors.email && (
            <span className="warning">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" ref={register} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" name="phoneNumber" />
        </div>
      </div>
      <div className="submit-button">
        <Button
          type="submit"
          style="btn--success--solid"
          text="save"
          icon={faSave}
        />
      </div>
    </form>
  );
};

export default EditCustomerDetailsForm;
