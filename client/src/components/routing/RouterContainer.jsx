import React, { useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HEROKU_API, DEV_API } from "../../service/api-service";
import Navbar from "../features/Navbar/NavbarNew";
import SideDrawer from "../features/SideDrawer/SideDrawer";
import Backdrop from "../features/Backdrop/Backdrop";
import Footer from "../features/Footer/Footer";
import ProtectedRoute from "./ProtectedRoute";
import * as user from "../screens/auth/auth.user";
import * as pagesRoutes from "../pages/pages.routes";

import LandingSideDrawer from "../features/LandingPage/SideDrawer/LandingSideDrawer";
const RegisterScreen = lazy(() =>
  import("../screens/auth/register/RegisterScreen")
);
const CartScreen = lazy(() => import("../screens/Cartscreen"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const ProductsScreen = lazy(() =>
  import("../screens/categories/ProductsScreen")
);
const PermissionScreen = lazy(() => import("../screens/PermissionScreen"));
const AdminPanel = lazy(() => import("../pages/AdminPanel"));
const DisplayProduct = lazy(() =>
  import("../features/Products/categories/DisplayProduct")
);
const HomeScreen = lazy(() => import("../screens/Homescreen"));

const RouterContainer = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("authToken"));
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      {window.location.href === `${DEV_API}/#` ? (
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
          <Route exact path="/" component={pagesRoutes.LandingPage} />
          <Route exact path="/home" component={HomeScreen} />
          <ProtectedRoute exact path="/cart">
            {isLogin ? <CartScreen /> : <Redirect to="/login" />}
          </ProtectedRoute>
          <ProtectedRoute path="/adminpanel">
            {isLogin ? <PermissionScreen /> : <Redirect to="/" />}
          </ProtectedRoute>
          <ProtectedRoute path="/adminpanel/:id">
            {isLogin ? <AdminPanel /> : <Redirect to="/" />}
          </ProtectedRoute>
          <Route exact path="/contactus" component={ContactUs} />
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
