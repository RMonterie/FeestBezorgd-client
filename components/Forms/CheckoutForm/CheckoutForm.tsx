import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
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
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onBlur",
  });
  let user;
  const products = useSelector((state) => state.cart.products);

  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const preFillForm = () => {
    setValue("name", user.name);
    setValue("email", user.email);
    if (user.phoneNumber.trim().length != 0) {
      setValue("phoneNr", user.phoneNumber);
    }
  };

  useEffect(() => {
    preFillForm();
  }, []);

  //TODO: Use the placeOrder method on submit.
  const onSubmitHandler = (data) => {
    event.preventDefault();
    console.log(data);
    console.log(products);
  };

  return (
    <div className="checkout-form">
      <span onClick={() => Router.back()} className="back-button">
        <FontAwesomeIcon icon={faChevronLeft} />
        Cancel checkout
      </span>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h2>Please enter your details</h2>
        <h3>Personal information</h3>
        <div className="single-input">
          <label htmlFor="name">Name*</label>
          <input type="text" name="name" ref={register({ required: true })} />
          {errors.name && (
            <span className="warning">This field is required!</span>
          )}
        </div>
        <div className="input-container">
          <div className="left-input">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              ref={register({ required: true })}
            />
            {errors.email && (
              <span className="warning">This field is required!</span>
            )}
          </div>
          <div className="right-input">
            <label htmlFor="phoneNr">Phone Number</label>
            <input type="tel" name="phoneNr" ref={register({ max: 10 })} />
            {errors.phoneNr && (
              <span className="warning">Phone number is not valid</span>
            )}
          </div>
        </div>
        <h3>Delivery Address</h3>
        <div className="input-container">
          <div className="left-input">
            <label htmlFor="street">Street and HouseNr*</label>
            <input
              type="text"
              name="street"
              ref={register({ required: true })}
            />
            {errors.street && (
              <span className="warning">This field is required!</span>
            )}
          </div>
          <div className="right-input">
            <label htmlFor="city">City*</label>
            <input type="text" name="city" ref={register({ required: true })} />
            {errors.city && (
              <span className="warning">This field is required!</span>
            )}
          </div>
        </div>
        <div className="single-input">
          <label htmlFor="zip">Zip Code*</label>
          <input type="text" name="zip" ref={register({ required: true })} />
          {errors.zip && (
            <span className="warning">This field is required!</span>
          )}
        </div>
        <h3>Delivery date and time</h3>
        <div className="single-input">
          <label htmlFor="date">Delivery Date*</label>
          <input type="date" name="date" ref={register({ required: true })} />
          {errors.date && (
            <span className="warning">This field is required!</span>
          )}
        </div>
        <div className="single-input">
          <label htmlFor="time">Delivery Time*</label>
          <input type="time" name="time" ref={register({ required: true })} />
          {errors.time && (
            <span className="warning">This field is required!</span>
          )}
        </div>
        <h3>Select your payment method</h3>
        <Button
          icon={<FontAwesomeIcon icon={faIdeal} />}
          style="btn--primary--solid"
          onClick={() => Router.push("/checkoutSuccess")}
        />
        <Button
          icon={<FontAwesomeIcon icon={faPaypal} />}
          style="btn--primary--solid"
          type="submit"
        />
      </form>
    </div>
  );
};

export default CheckoutForm;