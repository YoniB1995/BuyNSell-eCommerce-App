import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoGamesScreen from "../screens/categories/VideoGamesScreen";
import ScreensScreen from "../screens/categories/ScreensScreen";
import ShoesScreen from "../screens/categories/ShoesScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import ForgotPassScreen from "../screens/auth/ForgotPassScreen";
import ResetPassScreen from "../screens/auth/ResetPassScreen";
import CartScreen from "../screens/Cartscreen";
import PrivateScreen from "../screens/auth/PrivateScreen";
import PrivateRoute from "../routing/PrivateRoute";
import UsersPage from "./UsersPage";
import LandingPage from "./LandingPage";
import NotFoundPage from "./NotFoundPage";
import HomeScreen from "../screens/Homescreen";
import ScreensDisplayScreen from "../features/Products/categories/ScreensDisplayScreen";
import GamesDisplayScreen from "../features/Products/categories/GamesDisplayScreen";
import ShoesDisplayScreen from "../features/Products/categories/ShoesDisplayScreen";

const RouterContainer = () => {
  return (
    <main>
      <Switch>
        <PrivateRoute exact path="/private" component={PrivateScreen} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/user/:id" component={UsersPage} />
        <Route exact path="/home" component={UsersPage} />
        <Route exact path="/home/screens" component={ScreensScreen} />
        <Route
          exact
          path="/home/screens/:id"
          component={ScreensDisplayScreen}
        />
        <Route exact path="/home/games" component={VideoGamesScreen} />
        <Route exact path="/home/games/:id" component={GamesDisplayScreen} />
        <Route exact path="/home/shoes" component={ShoesScreen} />
        <Route exact path="/home/shoes/:id" component={ShoesDisplayScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/forgotpass" component={ForgotPassScreen} />
        <Route
          exact
          path="/resetpass/:resetToken"
          component={ResetPassScreen}
        />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </main>
  );
};

export default RouterContainer;
