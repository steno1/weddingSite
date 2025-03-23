import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

import './WeddingWebsite.css';

const WeddingWebsite = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const weddingDate = new Date('2025-05-03T10:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch(() => alert('Click interaction is required to start the music!'));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const adjustVolume = (change) => {
    if (audioRef.current) {
      let newVolume = Math.max(0, Math.min(1, audioRef.current.volume + change));
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

 // Update window dimensions on resize
 useEffect(() => {
  const handleResize = () => {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div className="wedding-container">

<Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        numberOfPieces={100}
        gravity={0.05}
        wind={0.01}
        colors={['#FF69B4', '#FFD700', '#FF4500']} // Pink, Gold, Orange
      />
      <motion.h1 className="fancy-title" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
        Ada-Too
      </motion.h1>

      <p className="date-text">Saturday, May 3rd, 2025 | Mass: 10 AM</p>
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


      <section className="wedding-invitation">
        <h1>💍 Wedding Invitation</h1>
        <p>✨ The families of</p>
        <h2>Mr. & Mrs. Inegbu Peter Chukwuemeka</h2>
        <p>of Umueze Isuofia, Aguata LGA, Anambra State</p>
        <h2>&</h2>
        <h2>Engr. & Mrs. Michael Bill Onu</h2>
        <p>of Amenu Uburu, Ohaozara LGA, Ebonyi State</p>

        <p className="invite-text">Cordially invite you to celebrate the wedding of their beloved children:</p>
        <h2 className="couple-names">Inegbu Adaobi & Onu Toochukwu</h2>

        <div className="details">
          <p>📅 <strong>Date:</strong> Saturday, 3rd May, 2025</p>
          <p>⏰ <strong>Time:</strong> Holy Mass – 10:00 AM</p>
          <p>📍 <strong>Venue:</strong> St. Theresa Catholic Church, Umueze Isuofia</p>
          <p>🎉 <strong>Reception:</strong> After Mass at Mr. Peter Inegbu's Compound</p>
          <p className="color-options">
  <span className="color-span" style={{ backgroundColor: 'black', color: 'white' }}>Black</span>
  <span className="color-span" style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}>White</span>
  <span className="color-span" style={{ backgroundColor: '#722f37', color: 'white' }}>Wine</span>
  <span className="color-span" style={{ backgroundColor: 'red', color: 'white' }}>Red</span>
  <span className="color-span" style={{ backgroundColor: 'goldenrod', color: 'white' }}>Gold</span>
  <span className="color-span" style={{ backgroundColor: 'purple', color: 'white' }}>Onion</span>
</p>


        </div>
      </section>

      <p className="quote-text">Together we begin, forever we remain—two hearts, one soul.</p>


      <div className="countdown-grid">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
          <div key={label} className="counter-box">
            <p>{Object.values(timeLeft)[index]}</p>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="contact-section">
  <h2>Contact Us</h2>
  <div className="contact-card">
    <p>📞 <span className="name">Toochukwu</span></p>
    <p className="number">+2348142534211</p>
  </div>
  <div className="contact-card">
    <p>📞 <span className="name">Adaobi</span></p>
    <p className="number">+2348101172693</p>
  </div>
</div>


      <div className="music-controls">
        <button onClick={toggleAudio}>{isPlaying ? 'Pause Music' : 'Play Music'}</button>
        <button onClick={() => adjustVolume(0.1)}>Volume +</button>
        <button onClick={() => adjustVolume(-0.1)}>Volume -</button>
        <p className="volume-text">Volume: {(volume * 100).toFixed(0)}%</p>
        <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/music/love.mp3`} loop />
      </div>

      <footer className="footer-text">Made with ❤️ by Toochukwu & Adaobi</footer>

      
    </div>
  );
};

export default WeddingWebsite;
