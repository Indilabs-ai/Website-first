import React, { useState } from "react";
import "../App.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
const Founder = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider slider-wrapper">
          <div className="keen-slider__slide founder-container">
            <div className="founder-image-box">
              <img src="./img/founder.jpeg" className="founder-img" />
            </div>
            <div className="founder-content">
              <p className="founder-caption">Meet the Founder</p>
              <p className="founder-heading">Amit Chandola</p>
              <p className="founder-para">
                20+ years of global experience in Credit and collections across
                US, India, Hong Kong and the Asia Pacific markets.
              </p>
              <p className="founder-para">
                In his most recent role, Amit was Asia Head of Credit Control
                Services for a Global Bank, with scope spanning USD100+ Billion
                in consumer lending assets across 16 markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#fff"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Founder;
