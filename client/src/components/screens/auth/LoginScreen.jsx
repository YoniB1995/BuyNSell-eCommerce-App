import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../auth/register/RegisterScreen.css";
import { API } from "../../../service/user-service";

import { faUser, faMailBulk, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    };

    try {
      await fetch(`${API}/user/login`, options).then((res) =>
        setUser(res.json())
      );

      localStorage.setItem("authToken", user.token);

      history.push(`/user/${user._id}`);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>
        {error && <span className="error-message">{error}</span>}

        <span>
          <FontAwesomeIcon icon={faMailBulk} />
          <input
            type="email"
            required
            id="email"
            placeholder="Enter Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            tabIndex={1}
          />
        </span>

        <span>
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            required
            id="password"
            placeholder="Enter password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            tabIndex={2}
          />
        </span>
        <div className="button-login-forgot">
          <Button type="submit" variant="contained" className="btn btn-login">
            Login
          </Button>
          <Button
            type="submit"
            variant="secondary"
            className="btn btn-login"
            tabIndex={3}
          >
            <Link
              to="/forgotpass"
              className="login-screen__forgotpassword"
              tabIndex={4}
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              Forgot Password?
            </Link>
          </Button>
        </div>
        <span className="login-screen__subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;
