import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../../../service/user-service";
import GoogleLogin from "react-google-login";
import "./RegisterScreen.css";

import { faUser, faMailBulk, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";

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

  const RegisterToGoogle = (response) => {
    alert("User Registered, Continue to Login");
    history.push("/login");
  };

  const FailedToRegister = () => {
    alert("Registartion Failed! Try again");
    history.push("/");
  };

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
          <span>
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              required
              id="name"
              placeholder="Enter username:"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </span>

          <span>
            <FontAwesomeIcon icon={faMailBulk} />{" "}
            <input
              type="email"
              required
              id="email"
              placeholder="Enter Email:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </span>

          <span>
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              required
              id="confirmpassword"
              placeholder="Confirm password:"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </span>

          <Button variant="contained" type="submit" className="btn btn-primary">
            Register
          </Button>

          <div className="social-button">
            <GoogleLogin
              clientId="231310203274-goc5kpj2lug42hvv51sc1f35lhk70bne.apps.googleusercontent.com"
              buttonText="Register With Google"
              onSuccess={RegisterToGoogle}
              onFailure={FailedToRegister}
              cookiePolicy={"single_host_origin"}
            />
          </div>

          <span className="register-screen__subtext">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#f4f4f4" }}
            >
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;
