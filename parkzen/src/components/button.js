import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

function HoverableButton({ buttonText, navigateTo }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo); // Navigate to the passed route
    }
  };

  return (
    <button
      type="button"
      className="btn"
      style={{
        backgroundColor: '#00008B',
        color: isHovered ? '#ff6347' : '#fff',
        borderColor: '#00008B',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick} // Add onClick handler for navigation
    >
      {buttonText}
    </button>
  );
}

export default HoverableButton;
