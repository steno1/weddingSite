import React from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = ({ width, height }) => {
  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={100}
      gravity={0.05}
      wind={0.01}
      colors={['#FF69B4', '#FFD700', '#FF4500']}
    />
  );
};

export default ConfettiEffect;
