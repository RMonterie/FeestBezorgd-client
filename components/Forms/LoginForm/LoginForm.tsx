import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { authenticate } from "../../../redux/actions/authActions";
import { login } from "../../../api/user/authMethods";

import "./LoginForm.scss";
import Button from "../../Button";

//TODO Add validation to this form
/**
 * Component that renders a form and calls the login function
 * with the provided form details.
 *
 * @returns {JSX.Element}
 */
const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
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

    if (succesfulLogin) {
      dispatch(authenticate());
    } else {
      setError(true);
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
        {error && (
          <p className="login-error">
            The provided username/password was not correct
          </p>
        )}
        <Button type="submit" style="btn--primary--solid" text="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
