import React from 'react';
import '../pages/Aboutpage.css';
import images from '../assets/images.jpeg'; // Import your images

const Section2 = () => {
  return (
    <div className="section section2">
      <div className="image-container">
        <img src={images} alt="Training" />
      </div>
      <div className="text-container">
        <h2>Our Method</h2>
        <h3>How We Do It</h3>
        <p>
          Everyone always talks about the importance of strengthening your core.
          We all know that core training can improve your strength, flexibility,
          and posture while also rehabilitating your lower back and correcting
          other core-related issues.
        </p>
        <p>
          We also know that strengthening the smaller muscle groups that
          comprise your core makes your entire body more balanced, more
          athletic, and more powerful.
        </p>
      </div>
    </div>
  );
};

export default Section2;
