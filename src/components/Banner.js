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
            <h1 style={{ margin: "0" }}>
              we are here to build <br />
              <span style={{ margin: "0", color: "#62b6aa" }}> web </span> &
              <span style={{ margin: "0", color: "#62b6aa" }}>
                {" "}
                mobile apps{" "}
              </span>
              for you.{" "}
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
