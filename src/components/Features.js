import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import "./Features.css";
import "boxicons";

const Features = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true, // for setting overflow
    centerPadding: "50px", // Afor setting overflow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="main">
        <div className="top">
          <div className="topleft">
            <h1>Features</h1>
            <p>
            A Glimpse Into Our Features: Precision, Intuitiveness, Risk Management, and Dynamic Strategies
            </p>
          </div>
          <div className="carousel-arrows">
            <button className="arrow-button prev" onClick={goToPrev}>
              <box-icon name="chevron-left"></box-icon>
            </button>
            <button className="arrow-button next" onClick={goToNext}>
              <box-icon name="chevron-right"></box-icon>
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Slider ref={sliderRef} {...settings}>
          {/* Replace the following URLs with your image URLs */}
          <div className="maincard">
            <div className="card">
              <button className="c1">Guardian</button>
              <h2>End-to-end risk mitigation</h2>
              <p className="c1p">
              Seamless risk management through comprehensive strategies, integrating external data via APIs, ensuring banking clients and investors experience robust risk mitigation throughout the collection process </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button className="c2">Simplified</button>
              <h2>Intuitive, user-friendly UI</h2>
              <p className="c2p">
              Offering an intuitive and user-friendly interface for seamless navigation, ensuring a positive and stress-free experience for banking clients and investors managing their financial strategies.
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button className="c3">Automated</button>
              <h2>AI-assisted platform</h2>
              <p className="c3p">
              Harnessing the power of artificial intelligence to provide intelligent insights, automating processes, and delivering tailored financial solutions for banking clients and investors seeking cutting-edge technology.
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button className="c4">Adaptive</button>
              <h2>Dynamic Strategies</h2>
              <p className="c4p">Tailoring dynamic strategies that adapt to the unique characteristics of each client's portfolio, providing personalized solutions for banking clients and investors seeking flexibility and responsiveness in their financial strategies.
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button className="c5">Streamlined</button>
              <h2>High Speed Architecture</h2>
              <p className="c5p">
              Swiftly process multiple data sources for banking clients and investors, ensuring unparalleled speed and responsiveness in decision-making. Elevate your financial strategies with real-time insights.
              </p>
            </div>
          </div>
        </Slider>


        
      </div>
      <div className="red-section "></div>
    </>
    
  );
};

export default Features;