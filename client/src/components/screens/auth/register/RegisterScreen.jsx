import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { registerUser } from "../../../../service/user-service";
// import "./authScreen.css";

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    const userData = {
      username: username,
      email: email,
      password: password,
    };
    await registerUser(userData);
    history.push("/");
  };

  return (
    <>
      <div className="register-screen">
        <form onSubmit={registerHandler} className="register-screen__form">
          <h3 className="register-screen__title">Register</h3>
          {error && <span className="error-message">{error}</span>}
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username:"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="name">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm password:"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-primary">
            Register
          </button>

          <span className="register-screen__subtext">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;
