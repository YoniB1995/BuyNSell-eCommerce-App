import React, { useState } from "react";
import Navbar from "../features/Navbar/NavbarNew";
import Backdrop from "../features/BackDrop/Backdrop";
import SideDrawer from "../features/SideDrawer/SideDrawer";
import Footer from "../features/Footer/Footer";
import HomeScreen from "../screens/Homescreen";
import RouterContainer from "./RouterContainer";

const UsersPage = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div style={{ background: "#f4f4f4" }}>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <HomeScreen />
      <Footer />
    </div>
  );
};

export default UsersPage;
