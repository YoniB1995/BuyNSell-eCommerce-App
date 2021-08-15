import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarNew";
import CartScreen from "./components/Screens/Cartscreen";
import HomeScreen from "./components/Screens/Homescreen";
import ProductScreen from "./components/Screens/Productscreen";
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import { Footer } from "./components/Footer/Footer";
import VideoGamesScreen from "./components/Screens/VideoGamesScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <div>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route
              exact
              path="/videogames/product"
              component={VideoGamesScreen}
            />
            <Route exact path="/screens/product" component={VideoGamesScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
