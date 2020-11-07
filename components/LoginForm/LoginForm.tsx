import Axios from "axios";
import React, { useState } from "react";

import PageLink from "../../components/page/PageLink";

import "./LoginForm.scss";

const LoginForm = () => {
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
    Axios.post("http://localhost:8080/authenticate", {
      username,
      password,
    }).then((response) => {
      if (response.data.jwt) {
        localStorage.setItem("jwt", JSON.stringify(response.data.jwt));
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
        <button type="submit">Send request to the api</button>
        <div>
          <p>
            Don't have an account? Register{" "}
            <PageLink to="/" className="link">
              here.
            </PageLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
