import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";

import "../components/Dashboard.css";
const Dashboard = () => {
  return (
    <div className="mainContainer">
      <Navbar />
      <Banner />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Dashboard;
