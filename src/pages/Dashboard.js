import React from "react";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

import "../components/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="mainContainer">
      <Banner />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Dashboard;
