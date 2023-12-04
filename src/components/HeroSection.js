import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div id="home" className="container">
        <div className="box-1">
          <div className="title-box">
            <p className="title">The Business Of Lending Is Transforming.</p>
            <p className="subtitle">
              Are your Collections capabilities keeping up?
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="box-2">
          <div className="img-box">
            <img src="./img/f1-image.png" alt="title-image" className="f1-img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
