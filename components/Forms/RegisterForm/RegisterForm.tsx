import { useState } from "react";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import { authenticate } from "../../../redux/actions/authActions";
import {
  registerCaterer,
  registerCustomer,
} from "../../../api/user/authMethods";

import "./RegisterForm.scss";
import Button from "../../Button";

interface RegisterFormProps {
  role: string;
}

//TODO Add validation to form
const RegisterForm: React.FC<RegisterFormProps> = ({ role }) => {
  const [submitError, setSubmitError] = useState(false);
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm({ mode: "onBlur" });

  /**
   * Async function reponsible for submitting the register form.
   * Changes state isAuthenticated to true and redirects the user
   * to the landing page on successful register due to the register function
   * also calling the login function.
   *
   * @param {event} event
   */
  const onSubmitHandler = async (data) => {
    event.preventDefault();
    if (role.toLowerCase() == "customer") {
      const successfulRegister = await registerCustomer(data);
      if (successfulRegister) {
        dispatch(authenticate());
        Router.push("/caterers");
      } else {
        setSubmitError(true);
      }
    } else {
      const successfulRegister = await registerCaterer(data);
      if (successfulRegister) {
        dispatch(authenticate());
        Router.push("/products");
      } else {
        setSubmitError(true);
      }
    }
    console.log(data);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label htmlFor="username">Username*</label>
        <input
          type="text"
          name="username"
          ref={register({ required: true, minLength: 1 })}
        />
        {errors.username && (
          <span className="warning">
            {<FontAwesomeIcon icon={faExclamationTriangle} />}This field is
            required!
          </span>
        )}
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          name="password"
          ref={register({
            required: true,
            minLength: {
              value: 6,
              message: "Password needs to be minimum 6 characters long",
            },
          })}
        />
        {errors.password && (
          <span className="warning">
            {<FontAwesomeIcon icon={faExclamationTriangle} />}This field is
            required!
          </span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span className="warning">
            {<FontAwesomeIcon icon={faExclamationTriangle} />}
            Minimum length of password needs to be 6 characters
          </span>
        )}
        <label htmlFor="confirmPassword">Confirm password*</label>
        <input type="password" name="confirmPassword" ref={register} />
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          name="email"
          ref={register({
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && <span>bruh</span>}
        <label htmlFor="name">Name*</label>
        <input type="text" name="name" ref={register} />
        <label htmlFor="address">Address*</label>
        <input type="text" name="address" ref={register} />
        <label htmlFor="phoneNumber">Phone Number*</label>
        <input
          type="tel"
          name="phoneNumber"
          ref={register({ required: true, maxLength: 11, minLength: 8 })}
        />
        {errors.phoneNumber && <span>This is not a valid phone number</span>}
        <Button style="btn--primary--solid" type="submit" text="Register" />
        {submitError && <p>Something went wrong with submitting your form!</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
