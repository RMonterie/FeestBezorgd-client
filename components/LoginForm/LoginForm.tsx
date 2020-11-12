import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Router from "next/router";

import { authenticate } from "../../redux/actions/authActions";

import "./LoginForm.scss";

interface LoginFormProps {
  buttonText: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ buttonText }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/authenticate", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.jwt && response.status == 200) {
          localStorage.setItem("jwt", JSON.stringify(response.data));
          dispatch(authenticate());
          Router.push("/");
        }
      });
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
