import React, { useState } from "react";
import Navbar from "../features/Navbar/NavbarNew";
import Backdrop from "../features/Backdrop/Backdrop";
import SideDrawer from "../features/SideDrawer/SideDrawer";
import Footer from "../features/Footer/Footer";

import Container from "./RouterContainer";

const UsersPage = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Container />
      <Footer />
    </>
  );
};

export default UsersPage;
