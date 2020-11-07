import { useState } from "react";
import axios from "axios";

import "./RegisterForm.scss";

const RegisterForm = () => {
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
    let name = username;
    axios
      .post("http://localhost:8080/registerCustomer", {
        name,
        password,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="register-container">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={usernameChangeHandler} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={passwordChangeHandler}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
