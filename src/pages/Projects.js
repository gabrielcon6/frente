import React from "react";

import monitor1 from "../assets/monitor1.png";
import monitor2 from "../assets/monitor2.png";
import "../components/Projects.css";
const Projects = () => {
  return (
    <div className="projectsContainer" id="projects">
      <h2>our projects</h2>
      <div className="images">
        <img src={monitor2} />
        <img src={monitor1} className="monitor2" />
      </div>
      <ul>
        <li>mockedin</li>
        <li>salvador coffee</li>
      </ul>
    </div>
  );
};

export default Projects;
