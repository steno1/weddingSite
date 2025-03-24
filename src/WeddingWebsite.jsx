import React, { useState, useEffect, useRef } from 'react';
import CountdownTimer from './components/CountdownTimer';
import InvitationSection from './components/InvitationSection';
import CarouselSection from './components/CarouselSection';
import MusicControls from './components/MusicControls';
import ContactSection from './components/ContactSection';
import ConfettiEffect from './components/ConfettiEffect';
import Header from './components/Header';
import Footer from './components/Footer';

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

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="wedding-container">
      <ConfettiEffect width={windowDimensions.width} height={windowDimensions.height} />
      <Header />
      <CarouselSection />
      <InvitationSection />
      <p className="quote-text">Together we begin, forever we remain—two hearts, one soul.</p>
      <CountdownTimer timeLeft={timeLeft} />
      <ContactSection />
      <MusicControls
        isPlaying={isPlaying}
        toggleAudio={toggleAudio}
        adjustVolume={adjustVolume}
        volume={volume}
        audioRef={audioRef}
      />
      <Footer />
    </div>
  );
};

export default WeddingWebsite;
