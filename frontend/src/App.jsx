import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/Screens/HomeScreen";
import ProductScreen from "./components/Screens/ProductScreen";
import CartScreen from "./components/Screens/CartScreen";
import Navbar from "./components/Navbar/NavbarNew";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <h1>Hello World</h1> */}
        {/* SideDrawer */}
        {/* Backdrop */}
        <main>
          {/* <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
