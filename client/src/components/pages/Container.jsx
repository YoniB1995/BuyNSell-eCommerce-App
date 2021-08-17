import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoGamesScreen from "../Screens/VideoGamesScreen";
import LoginScreen from "../Screens/auth/LoginScreen";
import RegisterScreen from "../Screens/auth/RegisterScreen";
import ForgotPassScreen from "../Screens/auth/ForgotPassScreen";
import ResetPassScreen from "../Screens/auth/ResetPassScreen";
import CartScreen from "../Screens/Cartscreen";
import HomeScreen from "../Screens/Homescreen";
import ProductScreen from "../Screens/Productscreen";
import PrivateScreen from "../Screens/auth/PrivateScreen";
import PrivateRoute from "../routing/PrivateRoute";

const Container = () => {
  return (
    <main>
      <Switch>
        <PrivateRoute exact path="/private" component={PrivateScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/videogames/product" component={VideoGamesScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/forgotpass" component={ForgotPassScreen} />
        <Route
          exact
          path="/resetpass/:resetToken"
          component={ResetPassScreen}
        />
        <Route exact path="/screens/product" component={VideoGamesScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
    </main>
  );
};

export default Container;
