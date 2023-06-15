import React from "react";
import "./Navbar.css";
import NavbarTop from "./NavbarTop";
import NavbarMain from "./NavbarMain";
import NavbarBottom from "./NavbarBottom";

function Navbar() {
  return (
    <div>
      <NavbarTop />
      <NavbarMain />
      <NavbarBottom />
    </div>
  );
}

export default Navbar;
