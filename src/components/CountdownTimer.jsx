import React from 'react';

const CountdownTimer = ({ timeLeft }) => {
  return (
    <div className="countdown-grid">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
        <div key={label} className="counter-box">
          <p>{Object.values(timeLeft)[index]}</p>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
