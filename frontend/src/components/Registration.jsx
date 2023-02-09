import React, { useState, useEffect } from "react";

export const Register = (props) => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [uname, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isRegDisable, setIsRegDisable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  // const checkForm = () => {
  //     if (fname && lname && uname && email && pass) {
  //         setIsButtonDisabled(false);
  //     } else {
  //         setIsButtonDisabled(true);
  //     }
  // };
  // const checkForm = () => {
  //     return !fname || !lname || !uname || !email || !pass;
  // }

  useEffect(() => {
    uname === "" || fname === "" || email === "" || pass === ""
      ? setIsRegDisable(true)
      : setIsRegDisable(false);
  }, [uname, fname, email, pass]);

  return (
    <div className="auth-form-container">
      <h2>Registration</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="fname">First name</label>
        <input
          value={fname}
          fname="fname"
          onChange={(e) => setFName(e.target.value)}
          id="fname"
          placeholder=""
        />

        <label htmlFor="lname">Last name</label>
        <input
          value={lname}
          lname="lname"
          onChange={(e) => setLName(e.target.value)}
          id="lname"
          placeholder=""
        />

        <label htmlFor="uname">User name</label>
        <input
          value={uname}
          uname="uname"
          onChange={(e) => setUName(e.target.value)}
          id="uname"
          placeholder=""
        />

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
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

        <button type="submit" className="btn btn-success block w-100" disabled={isRegDisable}>
          Register
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
