import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassowrd, setCPassword] = useState("");

  function register() {
    if (password != cpassowrd) {
      alert("Email or password wrong");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
    }
  }

  return (
    <div className="register">
      <div className="box">
        <h1 className="text-3xl mb-3">Register</h1>
        <input
          type="name"
          placeholder="Name"
          className="register_name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="register_email"
          value={email}
          //   size="30"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="register_password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input_confirmpass"
          value={cpassowrd}
          onChange={(e) => {
            setCPassword(e.target.value);
          }}
        />
        <button className="signin_btn" onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
