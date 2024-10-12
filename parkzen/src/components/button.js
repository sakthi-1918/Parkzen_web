import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HoverableButton({ buttonText }) {
  const [isHovered, setIsHovered] = useState(false);

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
    >
      {buttonText}
    </button>
  );
}

export default HoverableButton;
