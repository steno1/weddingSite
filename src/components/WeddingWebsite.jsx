import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import './WeddingWebsite.css';

const WeddingWebsite = () => {
  const weddingDate = new Date('2025-05-03T10:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);

  useEffect(() => {
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
  }, [weddingDate]);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => alert('Click interaction is required to start the music!'));
    }
    setIsPlaying(!isPlaying);
  };

  const adjustVolume = (change) => {
    let newVolume = Math.max(0, Math.min(1, audioRef.current.volume + change));
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="wedding-container">
      <motion.h1 className="fancy-title" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
        Ada-Too
      </motion.h1>

      <p className="date-text">Saturday, May 3rd, 2025 | Mass: 10 AM</p>

      <Carousel autoPlay infiniteLoop showThumbs={false} className="carousel">
        <div><img src={`${process.env.PUBLIC_URL}/images/couple1.jpg`} alt="Couple" /></div>
        <div><img src={`${process.env.PUBLIC_URL}/images/couple2.jpg`} alt="Together Forever" /></div>
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
          <p>🎨 <strong>Colors:</strong> 
  <span style={{ backgroundColor: 'black', color: 'white', padding: '4px 10px', borderRadius: '20px', margin: '0 5px', display: 'inline-block' }}>Black</span>
  <span style={{ backgroundColor: 'white', color: 'black', padding: '4px 10px', borderRadius: '20px', margin: '0 5px', border: '1px solid #ccc', display: 'inline-block' }}>White</span>
  <span style={{ backgroundColor: '#722f37', color: 'white', padding: '4px 10px', borderRadius: '20px', margin: '0 5px', display: 'inline-block' }}>Wine</span>
  <span style={{ backgroundColor: 'red', color: 'white', padding: '4px 10px', borderRadius: '20px', margin: '0 5px', display: 'inline-block' }}>Red</span>
  <span style={{ backgroundColor: 'goldenrod', color: 'white', padding: '4px 10px', borderRadius: '20px', margin: '0 5px', display: 'inline-block' }}>Gold</span>
  <span style={{ backgroundColor: 'purple', color: 'white', padding: '4px 10px', borderRadius: '20px', margin: '0 5px', display: 'inline-block' }}>Onion</span>
</p>

        </div>
      </section>

      <blockquote className="quote">“Together we begin, forever we remain—two hearts, one soul.”</blockquote>

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
        <p>📞 Onu: +2349012345678</p>
        <p>📞 Adaobi: +2349087654321</p>
      </div>

      <div className="music-controls">
        <button onClick={toggleAudio}>{isPlaying ? 'Pause Music' : 'Play Music'}</button>
        <button onClick={() => adjustVolume(0.1)}>Volume +</button>
        <button onClick={() => adjustVolume(-0.1)}>Volume -</button>
        <p className="volume-text">Volume: {(volume * 100).toFixed(0)}%</p>
        <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/music/love.mp3`} loop />
      </div>

      <footer className="footer-text">Made with ❤️ by Onu & Adaobi</footer>
    </div>
  );
};

export default WeddingWebsite;
