import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/features/Navbar/NavbarNew";
import Backdrop from "./components/features/Backdrop/Backdrop";
import SideDrawer from "./components/features/SideDrawer/SideDrawer";
import Footer from "./components/features/Footer/Footer";

import Container from "./components/pages/Container";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <div>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Container />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
