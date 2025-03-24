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
          height: '100vh',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  </Carousel>
);

export default CarouselSection;
