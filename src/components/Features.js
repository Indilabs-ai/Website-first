import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
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
    centerMode: true,
    centerPadding: "50px",
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
      <div id="features" className="main">
        <div className="top">
          <div className="topleft">
            <h1>Features</h1>
            <p>
              A Glimpse Into Our Features: Precision, Intuitiveness, Risk
              Management, and Dynamic Strategies
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
                Seamless risk management through comprehensive strategies and
                leveraging AI/ML to drive optimal decisions at the right time.{" "}
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button className="c2">Simplified</button>
              <h2>Intuitive, user-friendly UI</h2>
              <p className="c2p">
                Expert designed interface for monitoring risks, simulating
                multiple scenarios and testing new strategies on the go.
                
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button className="c3">Intelligence</button>
              <h2>Decision science powered</h2>
              <p className="c3p">
                Harnessing the power of data science algorithms and AI to drive
                insights, strategies and execution across the credit cycle.
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button className="c4">Adaptive</button>
              <h2>Dynamic Strategies</h2>
              <p className="c4p">
                Algorithms to tailor dynamic strategies that adapt to the unique
                risk characteristics of each client's portfolio and customers.
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button className="c5">Security</button>
              <h2>Secure Infrastructure</h2>
              <p className="c5p">
                Secure infrastructure that ensures integrity and confidentiality
                of data, providing a reliable and resilient foundation for
                seamless operations.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      {/* <div className="red-section "></div> */}
    </>
  );
};

export default Features;
