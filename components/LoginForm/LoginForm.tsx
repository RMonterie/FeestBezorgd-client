import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Router from "next/router";

import { authenticate } from "../../redux/actions/authActions";
import { login } from "../../api/user/authMethods";

import "./LoginForm.scss";

interface LoginFormProps {
  buttonText: string;
}

//TODO Move this form to the header
//TODO Add validation to this form
const LoginForm: React.FC<LoginFormProps> = ({ buttonText }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  /**
   * Async function responsible for submitting the login form.
   * On successful login changes the isAuthenticated state to true and
   * redirects the user to the landing page.
   *
   * @param {Event} event
   */
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const succesfulLogin = await login(username, password);
    console.log(succesfulLogin);

    if (succesfulLogin) {
      dispatch(authenticate());
      Router.push("/");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default LoginForm;
