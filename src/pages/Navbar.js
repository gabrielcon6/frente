import React from "react";
import "../components/NavBar.css";
import logo from "../assets/smalLogo.png";
const Navbar = () => {
  return (
    <header className="navBar">
      <div className="navLinks">
        <img className="Logo" alt="" src={logo} />{" "}
        <a className="links" href="#about">
          about
        </a>
        <a className="links" href="#projects">
          projects
        </a>
        <a href="#contact" className="links">
          contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
