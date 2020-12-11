import { useState } from "react";
import { useDispatch } from "react-redux";
import Router from "next/router";

import { authenticate } from "../../../redux/actions/authActions";
import { register } from "../../../api/user/authMethods";

import "./RegisterForm.scss";
import TextInput from "../../Inputs/TextInput/TextInput";

//TODO Add validation to form
//TODO Move this form to the header
const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  /**
   * Async function reponsible for submitting the register form.
   * Changes state isAuthenticated to true and redirects the user
   * to the landing page on successful register due to the register function
   * also calling the login function.
   *
   * @param {event} event
   */
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let name = username;
    const successfulRegister = await register(name, password);

    if (successfulRegister) {
      dispatch(authenticate());
      Router.push("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="register-container">
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
        {error && <p>Something went wrong with submitting your form!</p>}
        <button type="submit">Register</button>
        <TextInput
          label="test"
          name="test"
          position="center"
          onChangeHandler={(event) => setUsername(event.target.value)}
          value={username}
        />
      </form>
    </div>
  );
};

export default RegisterForm;
