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
import ProductsScreen from "../screens/categories/ProductsScreen";
import ProtectedRoute from "../routing/ProtectedRoute";
import DisplayProduct from "../features/Products/categories/DisplayProduct";
import * as user from "../screens/auth/auth.user";
import * as pagesRoutes from "./pages.routes";
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
          <Route
            exact
            path="/home/:screens"
            render={() => <ProductsScreen type="screens" />}
          />
          <Route
            exact
            path="/home/:shoes"
            render={() => <ProductsScreen type="shoes" />}
          />
          <Route
            exact
            path="/home/:games"
            render={() => <ProductsScreen type="games" />}
          />
          <Route
            exact
            path="/home/:blazers"
            render={() => <ProductsScreen type="blazers" />}
          />
          <Route
            exact
            path="/home/:watches"
            render={() => <ProductsScreen type="watches" />}
          />
          <Route
            exact
            path="/home/:bags"
            render={() => <ProductsScreen type="bags" />}
          />

          <Route exact path="/home/screens/:id" component={DisplayProduct} />
          <Route exact path="/home/games/:id" component={DisplayProduct} />
          <Route exact path="/home/shoes/:id" component={DisplayProduct} />
          <Route exact path="/home/bags/:id" component={DisplayProduct} />
          <Route exact path="/home/blazers/:id" component={DisplayProduct} />
          <Route exact path="/home/watches/:id" component={DisplayProduct} />
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
