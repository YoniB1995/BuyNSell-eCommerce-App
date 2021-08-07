import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarNew";
import CartScreen from "./components/Screens/Cartscreen";
import HomeScreen from "./components/Screens/Homescreen";
import ProductScreen from "./components/Screens/Productscreen";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <h1>Hello World</h1> */}
        {/* SideDrawer */}
        {/* Backdrop */}
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
