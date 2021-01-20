import React from "react";
import { useForm } from "react-hook-form";
import { faSave } from "@fortawesome/free-solid-svg-icons";

import { editCatererDetails } from "../../../api/caterers/catererMethods";
import Button from "../../Button";

import "./EditCatererDetailsForm.scss";

/**
 * Form where a caterer can edit their details.
 */
const EditCatererDetailsForm: React.FC = () => {
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onBlur",
  });

  const onSubmitHandler = async (data) => {
    event.preventDefault();
    const response = await editCatererDetails(
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
      className="edit-details-form"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h2>Edit your details</h2>
      <div className="inputs">
        <div>
          <label htmlFor="name">Catering Name</label>
          <input type="text" name="name" ref={register({ required: true })} />
          {errors.name && (
            <span className="warning">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            ref={register({ required: true })}
          />
          {errors.address && (
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

export default EditCatererDetailsForm;
