import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fashion from '../../vendors/Fashion.jpg';
import Mobile from '../../vendors/Mobile.jpeg';
import Electronics from '../../vendors/Electronics.jpeg';
import Grocery from '../../vendors/Grocery.jpeg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables auto sliding
    autoplaySpeed: 3000, // Time interval for auto slide (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  // Correctly formatted image array
  const images = [
    Fashion,
    Mobile,
    Grocery,
    Electronics,
    
  ];

  return (
    <div className="container mt-3">
      <div 
        style={{ 
          width: '100%', 
          height: '400px', // Ensure full height for the container
         // overflow: 'hidden', // Ensures no overflow of images
        }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} >
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                style={{
                  objectFit: "cover", // Displays the entire image proportionally
                  height: "400px", // Occupies the full container height
                  width: "100%", // Occupies the full container width
                }} 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default Carousel;
