import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSection = () => (
  <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/adaToo1.jpg`}
        alt="Couple"
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: '10px',
        }}
      />
    </div>
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/princeleyPic1.jpeg`}
        alt="Couple"
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          objectPosition: 'top',
          borderRadius: '10px',
        }}
      />
    </div>
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/princeleyPics2.jpeg`}
        alt="Couple"
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          objectPosition: 'top',
          borderRadius: '10px',
        }}
      />
    </div>
  </Carousel>
);

export default CarouselSection;
