import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoGamesScreen from "../screens/VideoGamesScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPassScreen from "../screens/auth/ForgotPassScreen";
import ResetPassScreen from "../screens/auth/ResetPassScreen";
import CartScreen from "../screens/Cartscreen";
import HomeScreen from "../screens/Homescreen";
import ProductScreen from "../screens/Productscreen";
import PrivateScreen from "../screens/auth/PrivateScreen";
import PrivateRoute from "../routing/PrivateRoute";

const Container = () => {
  return (
    <main>
      <Switch>
        <PrivateRoute exact path="/private" component={PrivateScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/products/:id" component={ProductScreen} />
        <Route exact path="/products" component={VideoGamesScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/forgotpass" component={ForgotPassScreen} />
        <Route
          exact
          path="/resetpass/:resetToken"
          component={ResetPassScreen}
        />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
    </main>
  );
};

export default Container;
