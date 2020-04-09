import React from "react";
import Banner from "./Banner";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";

import "../components/Dashboard.css";
const Dashboard = () => {
  return (
    <React.Fragment>
      <Banner />
      <Projects />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
