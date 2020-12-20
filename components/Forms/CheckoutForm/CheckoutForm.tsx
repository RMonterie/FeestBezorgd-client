import React from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdeal, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Button from "../../Button";

import "./CheckoutForm.scss";

/**
 * Checkout form for use in the checkout page
 *
 * @returns {JSX.Element}
 */
const CheckoutForm: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("name"));

  return (
    <div className="checkout-form">
      <span onClick={() => Router.back()} className="back-button">
        <FontAwesomeIcon icon={faChevronLeft} />
        Cancel checkout
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Please enter your details</h2>
        <h3>Personal information</h3>
        <div className="left-input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue="test" ref={register} />
        </div>
        <div className="right-input">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            ref={register({ required: true })}
          />
          {errors.surname && <span>This field is required</span>}
        </div>
        <div className="single-input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <h3>Delivery Address</h3>
        <div className="left-input">
          <label htmlFor="street">Street</label>
          <input type="text" name="street" />
        </div>
        <div className="right-input">
          <label htmlFor="city">City</label>
          <input type="text" name="city" />
        </div>
        <div className="single-input">
          <label htmlFor="zip">Zip Code</label>
          <input type="text" name="zip" />
        </div>
        <h3>Delivery date</h3>
        <div className="single-input">
          <label htmlFor="date">Delivery Date</label>
          <input type="date" name="date" />
        </div>
      </form>
      <h3>Select your payment method</h3>
      <Button
        icon={<FontAwesomeIcon icon={faIdeal} />}
        style="btn--primary--solid"
      />
      <Button
        icon={<FontAwesomeIcon icon={faPaypal} />}
        style="btn--primary--solid"
      />
      <button type="submit">Submit</button>
    </div>
  );
};

export default CheckoutForm;
