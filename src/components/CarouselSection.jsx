import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSection = () => (
  <Carousel autoPlay infiniteLoop showThumbs={false} className="carousel">
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/adaToo1.jpg`}
        alt="Couple"
        style={{
          width: '100%',  
          maxHeight: '80vh', 
          objectFit: 'cover', 
         
        }}
      />
    </div>
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/princeleyPic1.jpeg`}
        alt="Couple"
        style={{
          width: '100%',  
          maxHeight: '80vh', 
          objectFit: 'cover', 
          objectPosition: 'top', 
        }}
      />
    </div>
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/princeleyPics2.jpeg`}
        alt="Couple"
        style={{
          width: '100%',  
          maxHeight: '80vh', 
          objectFit: 'cover', 
          objectPosition: 'top', 
        }}
      />
    </div>
  </Carousel>
);

export default CarouselSection;
