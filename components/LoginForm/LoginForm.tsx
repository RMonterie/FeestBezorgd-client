import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={usernameChangeHandler} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={passwordChangeHandler}
        />
        <button type="submit">Send request to the api</button>
      </form>
    </div>
  );
};

export default LoginForm;
