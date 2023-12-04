import React from 'react'
import './Features.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithStyles from 'react-with-styles';

const Features = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <>
      <div id="features" className="features">
        <h1>Features</h1>


        {/* Carousel for the features */}
        <Carousel  
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="card">
            <div className="card-1-heading">lorem ipsum</div>
            <h2>Dynamic adaptive strategies</h2>
            <p>Tailoring dynamic strategies that adapt to the unique characteristics of each client's portfolio, providing personalized solutions for banking clients and investors seeking flexibility and responsiveness in their financial strategies.</p>
          </div>
          <div className="card">
            <div className="card-2-heading">lorem ipsum</div>
            <h2>End-to-end risk mitigation</h2>
            <p>Seamless risk management through comprehensive strategies, integrating external data via APIs, ensuring banking clients and investors experience robust risk mitigation throughout the collection process</p>
          </div>
          <div className="card">
            <div className="card-3-heading">lorem ipsum</div>
            <h2>AI-assisted platform</h2>
            <p>Offering an intuitive and user-friendly interface for seamless navigation, ensuring a positive and stress-free experience for banking clients and investors managing their financial strategies.</p>
          </div>
          <div className="card">
            <div className="card-4-heading">lorem ipsum</div>
            <h2>Intuitive, user-friendly UI</h2>
            <p>Harnessing the power of artificial intelligence to provide intelligent insights, automating processes, and delivering tailored financial solutions for banking clients and investors seeking cutting-edge technology.</p>
          </div>
          
        </Carousel>;


        </div>
    </>
  )
}

export default Features




