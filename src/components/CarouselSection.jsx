import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSection = () => (
  <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    swipeable={true}
    emulateTouch={true}
    renderIndicator={() => null}
    style={{ touchAction: 'pan-y' }} // 👈 This is the key fix!
  >
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
          pointerEvents: 'none' // 👈 Prevents image from blocking the scroll
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
          pointerEvents: 'none'
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
          pointerEvents: 'none'
        }}
      />
    </div>
  </Carousel>
);

export default CarouselSection;
