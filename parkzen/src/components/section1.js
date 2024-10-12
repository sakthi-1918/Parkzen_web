import React from 'react';
import '../pages/Aboutpage.css';
import parkingLot from '../assets/parkingLot.jpeg'; // Import your images

const Section1 = () => {
  return (
    <div className="section section1">
      <div className="text-container">
        <h2>The Bodyrock Way</h2>
        <h3>What We Do</h3>
        <p>
          At Bodyrock Body, we specialize in seriously fun and effective
          back-to-basics core fitness training. At the center of our program is
          the belief that before you attempt to master heavy weights or
          expensive machines, you must first master your body.
        </p>
        <p>We're old school...</p>
        <p>
          If you were to ask a big-name gym franchise about what we do every
          day, they'd probably ask "why are they still doing those same
          old-school workouts that our dads did? Our answer is "because it
          works."
        </p>
      </div>
      <div className="image-container">
        <img src={parkingLot} alt="Bodyrock" />
      </div>
    </div>
  );
};

export default Section1;
