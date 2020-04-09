import React from "react";
import "../components/Banner.css";
import bennerImg from "../assets/banne.png";

const Banner = () => {
  return (
    <section id="banner">
      <div className="mainBanner">
        <div className="mainContent">
          <div>
            <img className="imageBanner" src={bennerImg} alt="" />
          </div>
          <div className="bigBanner">
            {" "}
            <h1 style={{ margin: "0" }}>
              We can
              <span style={{ margin: "0", color: "#62b6aa" }}> build</span> your
              app{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
