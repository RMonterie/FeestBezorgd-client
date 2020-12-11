import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdeal, faPaypal } from "@fortawesome/free-brands-svg-icons";

import Button from "../../Button";

import "./CheckoutForm.scss";

/**
 * Checkout form for use in the checkout page
 *
 * @returns {JSX.Element}
 */
const CheckoutForm: React.FC = () => {
  return (
    <div className="checkout-form">
      <form>
        <h2>Please enter your details</h2>
        <h3>Personal information</h3>
        <div className="left-input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className="right-input">
          <label htmlFor="surname">Surname</label>
          <input type="text" name="surname" />
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
    </div>
  );
};

export default CheckoutForm;
