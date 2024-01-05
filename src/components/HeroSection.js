import React from "react";
import "./HeroSection.css";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <>
      <div id="home" className="container">
        <div className="box-1">
          <div className="title-box">
            <p className="title">The Business Of Lending Is Transforming.</p>
            <p className="subtitle">
              Are your Risk intelligence and Collections capabilities keeping up?
            </p>
            <div className="title-button">
              <button>
                <Link to="contact" smooth={true} duration={800}>
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="img-box">
            <img
              src="./img/f1-image.png"
              alt="title-image"
              className="f1-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
