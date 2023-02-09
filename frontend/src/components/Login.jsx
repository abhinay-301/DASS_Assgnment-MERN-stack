import React, { useState } from "react";
import { useEffect } from "react";

export const Login = (props) => {
  const [UserName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [isDisable, setIsDisable] = useState(true);
//   const [isRegDisable, setIsRegDisable] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    (UserName === '' || pass === '')?setIsDisable(true):setIsDisable(false);
  },[UserName,pass])
//   const checkForm = () => {
//     return UserName.length > 0 && pass.length > 0;
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (UserName === "admin" && pass === "admin") {
      // setIsLoggedIn(true);
      localStorage.setItem("username", UserName);
      localStorage.setItem("password", pass);
      window.location.href = "/profile";
    } else {
      setError("Incorrect username or password");
    }
    // console.log(UserName);
  };

  return (
    <>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="UserName">UserName</label>
          <input
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            type="UserName"
            placeholder="UserName"
            id="UserName"
            name="UserName"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit" className="btn btn-success block w-100" disabled={isDisable}>Log In</button>
          {error && <p>{error}</p>}
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </>
  );
};
