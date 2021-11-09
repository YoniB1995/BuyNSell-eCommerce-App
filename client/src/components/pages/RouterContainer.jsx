import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../features/Navbar/NavbarNew";
import SideDrawer from "../features/SideDrawer/SideDrawer";
import Backdrop from "../features/Backdrop/Backdrop";
import Footer from "../features/Footer/Footer";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import CartScreen from "../screens/Cartscreen";
import ContactUs from "../pages/ContactUs";
import ProtectedRoute from "../routing/ProtectedRoute";
import * as user from "../screens/auth/auth.user";
import * as screen from "../screens/categories/screens.categories";
import * as pagesRoutes from "./pages.routes";
import * as product from "../features/Products/categories/display.product";
import LandingSideDrawer from "../features/LandingPage/SideDrawer/LandingSideDrawer";

const RouterContainer = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("authToken"));
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      {window.location.href === "http://localhost:3000/#" ? (
        <LandingSideDrawer
          show={sideToggle}
          click={() => setSideToggle(false)}
        />
      ) : (
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      )}

      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main>
        <Switch>
          <ProtectedRoute exact path="/cart">
            {isLogin ? <CartScreen /> : <Redirect to="/login" />}
          </ProtectedRoute>
          <Route exact path="/" component={pagesRoutes.LandingPage} />
          <Route exact path="/contactus" component={ContactUs} />
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
          <Route exact path="*" component={pagesRoutes.NotFoundPage} />
        </Switch>
      </main>

      <Footer />
    </>
  );
};

export default RouterContainer;
