import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../auth/register/RegisterScreen.css";
import { API } from "../../../service/user-service";
import GoogleLogin from "react-google-login";

import { faUser, faMailBulk, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [details, setDetails] = useState("");

  const LoggedToGoogle = (response) => {
    localStorage.setItem("authToken", response.accessToken);
    localStorage.setItem("firstName", response.profileObj.name);
    history.push("/home");
  };

  const FailedToLog = () => {
    alert("Login Failed! Try again");
    history.push("/");
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/home");
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
      await fetch(`${API}/user/login`, options)
        .then((res) => setDetails(res.json()))
        .then((details) => setDetails(details.data));

      localStorage.setItem("authToken", details);

      history.push(`/home`);
    } catch (error) {
      console.log(error);
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

        <div className="social-button">
          <GoogleLogin
            clientId="231310203274-goc5kpj2lug42hvv51sc1f35lhk70bne.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={LoggedToGoogle}
            onFailure={FailedToLog}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
