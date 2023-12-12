import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Infinite-carousel.css';
import '../App.css';

const InfiniteCarousel = () => {
  const settings = {
   dots: false,
   arrows: true,
   infinite: true,
   slidesToShow: 5,
   slidesToScroll: 1,
   centerMode: true,
   draggable: true,
   centerPadding: '50px',
   autoplay: true,
   autoplaySpeed: 1, // Adjust the autoplay speed as needed
   speed: 1100, // Set speed to 0 for continuous linear movement
   cssEase: 'ease-in-out',
   pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const images = [

  './img/data.png',
  './img/visualization.png',
  './img/diagonostics.png',
  './img/simulation.png',
  './img/decisioning.png',
  './img/automation.png',
  './img/APIs.png',
    // Add more images as needed
  ];

  return (
    <div className='sliderbox'>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div className="slider" key={index}>
            <img src={imageUrl} className="img-scroll" alt={`slide-${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;
