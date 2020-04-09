import React from "react";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

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
