import React from "react";

const Login = () => {
  return (
    <div className="login">
      <form>
        <label htmlFor="email">email</label>
        <input id="email" type="text" placeholder="email" required />
        <label htmlFor="password">password</label>
        <input id="password" type="text" placeholder="password" required />
      </form>
    </div>
  );
};

export default Login;
