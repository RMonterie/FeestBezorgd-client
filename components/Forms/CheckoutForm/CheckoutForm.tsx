import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdeal, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Button from "../../Button";
import { createPayment, placeOrder } from "../../../api/user/orderMethods.js";

import "./CheckoutForm.scss";
import { clearCart } from "../../../redux/actions/cartActions";
import { preFillForm } from "./utils";

/**
 * Checkout form for use in the checkout page
 */
const CheckoutForm: React.FC = () => {
  const [userData, setUserData] = React.useState(null);

  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onBlur",
  });
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  let user;

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserData(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      preFillForm(userData, setValue);
    }
  }, []);

  const onSubmitHandler = async (data) => {
    event.preventDefault();
    const payment = await createPayment();
    let href = payment.data._links.checkout.href;
    let paymentId = payment.data.id;
    placeOrder(
      products,
      products[0].caterer,
      data.email,
      data.street,
      data.zip,
      data.city,
      data.phoneNr,
      paymentId
    );

    Router.push(href);
    dispatch(clearCart());
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
            <input type="tel" name="phoneNr" ref={register()} />
          </div>
        </div>
        <h3>Delivery Address</h3>
        <div className="input-container">
          <div className="left-input">
            <label htmlFor="street">Street Address*</label>
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
        <Button icon={faIdeal} style="btn--primary--solid" type="submit" />
      </form>
    </div>
  );
};

export default CheckoutForm;
