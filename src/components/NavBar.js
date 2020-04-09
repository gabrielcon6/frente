import React from "react";
import "../components/NavBar.css";
import logo from "../assets/smalLogo.png";

const NavBar = () => {
  const reloadPage = () => {
    window.location.reload();
  }
  return (
    <header className="navBar" id="navBar">
      <div className="navLinks">
        <img className="Logo" alt="" src={logo} onClick={reloadPage}/>{" "}
        <a className="links" href="#about">
          <span className="spanLeft">&#60; </span>about
          <span className="spanRight"> &#62;</span>
        </a>
        <a className="links" href="#projects">
          <span className="spanLeft">&#60; </span>projects
          <span className="spanRight"> &#62;</span>
        </a>
        <a href="#contact" className="links">
          <span className="spanLeft">&#60; </span>contact
          <span className="spanRight"> &#62;</span>
          {/* <span class="about-effect">&lt;</span> about{" "}
          <span class="about-effect">&gt;</span> */}
        </a>
        {/* <a className="links" href="#projects">
          <span class="projects-effect">&lt;</span> projects{" "}
          <span class="projects-effect">&gt;</span>
        </a>
        <a href="#contact" className="links">
          <span class="contact-effect">&lt;</span> contact{" "}
          <span class="contact-effect">&gt;</span>
        </a> */}
      </div>
    </header>
  );
};

export default NavBar;
