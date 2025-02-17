// src/components/WeddingWebsite.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import './WeddingWebsite.css';

const WeddingWebsite = () => {

  const weddingDate = useMemo(() => new Date('2025-04-26T10:00:00'), []);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

  useEffect(() => {
    const audio = new Audio('/music/love.mp3');
    audio.loop = true;
    audio.volume = 0.1; // Set volume to 20%
  
    const playAudio = () => {
      audio.play().catch(() => console.warn('Autoplay failed. User interaction required.'));
      document.removeEventListener('click', playAudio);
    };
  
    document.addEventListener('click', playAudio);
    return () => document.removeEventListener('click', playAudio);
  }, []);
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center text-center relative">
      <motion.h1 className="text-6xl font-fancy text-pink-600 mt-6" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>Ada-Too</motion.h1>
      <p className="text-lg text-gray-600 mt-2">Join us on April 26, 2025 (Mass: 10 AM)</p>
      <Carousel autoPlay infiniteLoop showThumbs={false} className="mt-6 max-w-md">
        <div><img src="/images/couple1.jpg" alt="Couple" /></div>
        <div><img src="/images/couple2.jpg" alt="Together Forever" /></div>
      </Carousel>
      <h2 className="text-2xl font-semibold text-pink-500 mt-8">Venue</h2>
      <p className="text-gray-600">St. Mary's Catholic Church, Enugu</p>
      <p className="text-gray-500">Reception: Royal Garden Event Center</p>
      <blockquote className="italic text-lg text-gray-700 mt-6">“Two hearts, one journey. Forever and always.”</blockquote>
      <div className="mt-8 grid grid-cols-4 gap-4">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
          <div key={label} className="w-24 h-24 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
            <p className="text-2xl font-bold">{Object.values(timeLeft)[index]}</p>
            <p className="text-xs text-gray-500">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-2">
        <h2 className="text-xl font-bold text-pink-500">Contact Us</h2>
        <p className="text-gray-600">📞 Onu: +2349012345678</p>
        <p className="text-gray-600">📞 Partner: +2349087654321</p>
      </div>
      <footer className="mt-8 text-sm text-gray-500">Made with ❤️ by Onu & Partner</footer>
    </div>
  );
};

export default WeddingWebsite;
