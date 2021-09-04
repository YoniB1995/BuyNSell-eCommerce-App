import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import CartScreen from "../screens/Cartscreen";
import PrivateScreen from "../screens/auth/PrivateScreen";
import PrivateRoute from "../routing/PrivateRoute";
import * as user from "../screens/auth/auth.user";
import * as screen from "../screens/categories/screens.categories";
import * as pagesRoutes from "./pages.routes";
import * as product from "../features/Products/categories/display.product";

const RouterContainer = () => {
  return (
    <main>
      <Switch>
        <PrivateRoute exact path="/private" component={PrivateScreen} />
        <Route exact path="/" component={pagesRoutes.LandingPage} />
        <Route exact path="/user/:id" component={pagesRoutes.UsersPage} />
        <Route exact path="/home" component={pagesRoutes.UsersPage} />
        <Route exact path="/home/screens" component={screen.ScreensScreen} />
        <Route
          exact
          path="/home/screens/:id"
          component={product.ScreensDisplayScreen}
        />
        <Route exact path="/home/games" component={screen.VideoGamesScreen} />
        <Route
          exact
          path="/home/games/:id"
          component={product.GamesDisplayScreen}
        />
        <Route exact path="/home/shoes" component={screen.ShoesScreen} />
        <Route
          exact
          path="/home/shoes/:id"
          component={product.ShoesDisplayScreen}
        />
        <Route exact path="/home/bags" component={screen.BagsScreen} />
        <Route
          exact
          path="/home/bags/:id"
          component={product.BagsDisplayScreen}
        />
        <Route exact path="/home/blazers" component={screen.BlazersScreen} />
        <Route
          exact
          path="/home/blazers/:id"
          component={product.BlazersDisplayScreen}
        />
        <Route exact path="/home/watches" component={screen.WatchesScreen} />
        <Route
          exact
          path="/home/watches/:id"
          component={product.WatchesDisplayScreen}
        />
        <Route exact path="/login" component={user.LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/forgotpass" component={user.ForgotPassScreen} />
        <Route
          exact
          path="/resetpass/:resetToken"
          component={user.ResetPassScreen}
        />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="*" component={pagesRoutes.NotFoundPage} />
      </Switch>
    </main>
  );
};

export default RouterContainer;
