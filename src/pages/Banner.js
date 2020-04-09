import React from "react";
import "../components/Banner.css";

import bennerImg from "../assets/banne.png";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="mainBanner" id="banner">
        <div className="mainContent">
          <div>
            <img className="imageBanner" src={bennerImg} alt="" />
          </div>

          <div className="bigBanner">
            {" "}
            <h1 style={{ margin: "0" }}>We can</h1>
            <h1 style={{ margin: "0" }}>
              <span style={{ margin: "0", color: "#62b6aa" }}> build </span>{" "}
              your app{" "}
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
