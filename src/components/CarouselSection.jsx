import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const CarouselSection = () => (
  <div
    style={{
      touchAction: 'pan-y', // ✅ allow vertical scroll
      overflow: 'hidden',
    }}
  >
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      swipeable={true}
      emulateTouch={true}
      swipeScrollTolerance={50} // ✅ makes vertical scroll more sensitive
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
            pointerEvents: 'none', // ✅ allow scroll through image
            touchAction: 'pan-y'
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
            pointerEvents: 'none',
            touchAction: 'pan-y'
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
            pointerEvents: 'none',
            touchAction: 'pan-y'
          }}
        />
      </div>
    </Carousel>
  </div>
);
export default CarouselSection;
