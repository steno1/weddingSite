import React from 'react';

const InvitationSection = () => {
  return (
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

        <div className="color-of-day-section">
          <h3>🎨 Color of the Day:</h3>
          <p className="color-options">
            <span className="color-span" style={{ backgroundColor: 'black', color: 'white' }}>Black</span>
            <span className="color-span" style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}>White</span>
            <span className="color-span" style={{ backgroundColor: '#722f37', color: 'white' }}>Wine</span>
            <span className="color-span" style={{ backgroundColor: 'red', color: 'white' }}>Red</span>
            <span className="color-span" style={{ backgroundColor: 'goldenrod', color: 'white' }}>Gold</span>
            <span className="color-span" style={{ backgroundColor: 'purple', color: 'white' }}>Onion</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
