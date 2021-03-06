import axios from "axios";
import React, { useState } from "react";

import "./LoginForm.scss";

interface LoginFormProps {
  buttonText: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ buttonText }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/authenticate", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.jwt) {
          localStorage.setItem("jwt", JSON.stringify(response.data));
        }
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={usernameChangeHandler} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={passwordChangeHandler}
        />
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default LoginForm;
