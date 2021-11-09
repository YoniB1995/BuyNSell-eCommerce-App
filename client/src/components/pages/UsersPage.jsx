import React, { useState } from "react";
import Navbar from "../features/Navbar/NavbarNew";
import Backdrop from "../features/Backdrop/Backdrop";
import SideDrawer from "../features/SideDrawer/SideDrawer";
import Footer from "../features/Footer/Footer";
import HomeScreen from "../screens/Homescreen";

const UsersPage = () => {
  return (
    <div style={{ background: "#f4f4f4" }}>
      <HomeScreen />
    </div>
  );
};

export default UsersPage;
