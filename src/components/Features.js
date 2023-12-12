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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              ducimus!
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
              <button>Lorem, ipsum.</button>
              <h1>This is Heading</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                aliquam eveniet vitae exercitationem laborum quam, fuga sapiente
                fugit architecto ducimus voluptas sunt obcaecati facilis officia
                ad impedit. Facilis, veritatis quia.
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button>Lorem, ipsum.</button>
              <h1>This is Heading</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                aliquam eveniet vitae exercitationem laborum quam, fuga sapiente
                fugit architecto ducimus voluptas sunt obcaecati facilis officia
                ad impedit. Facilis, veritatis quia.
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button>Lorem, ipsum.</button>
              <h1>This is Heading</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                aliquam eveniet vitae exercitationem laborum quam, fuga sapiente
                fugit architecto ducimus voluptas sunt obcaecati facilis officia
                ad impedit. Facilis, veritatis quia.
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button>Lorem, ipsum.</button>
              <h1>This is Heading</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                aliquam eveniet vitae exercitationem laborum quam, fuga sapiente
                fugit architecto ducimus voluptas sunt obcaecati facilis officia
                ad impedit. Facilis, veritatis quia.
              </p>
            </div>
          </div>
          <div className="maincard">
            <div className="card">
              <button>Lorem, ipsum.</button>
              <h1>This is Heading</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                aliquam eveniet vitae exercitationem laborum quam, fuga sapiente
                fugit architecto ducimus voluptas sunt obcaecati facilis officia
                ad impedit. Facilis, veritatis quia.
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