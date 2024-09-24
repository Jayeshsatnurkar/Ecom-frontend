// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fashion from '../vendors/Fashion.jpeg'
import Mobile from '../vendors/Mobile.jpeg'
import Electronics from '../vendors/Electronics.jpeg'
import Grocery from '../vendors/Grocery.jpeg'


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    { Fashion },
    { Mobile },
    { Grocery },
    Electronics,
    'https://via.placeholder.com/400x300?text=Slide+3',

  ];

  return (
    <div className="container">
      <div style={{ width: '100%', height: '100%' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div style={{ height: "100%", width: '100%' }} key={index}>
              <img src={Fashion} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
