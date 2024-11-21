import React, { useState } from 'react'
import img6 from '../asset/6.jpg'
import "../components/heroSection.css"

const HeroSection = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    // You can add additional logic or redirect the user to another page here
  };

  return (
    <div className="hero-section">
      <img
        src={img6}
        alt="Hero Image"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Welcome to My Website</h1>
        <p>This is an awesome website created with React! <br />
         Created By Saidani Latifa</p>
      
      </div>
    </div>
  );
};

export default HeroSection;