import ParkingLot from "../components/Slots";
import React from 'react';
// Correct path to import Profile
import Navibar from '../components/Navigationbar';

const View = () => {
  return (
    <div>
      <Navibar/>
      <div style={{paddingTop:'90px',position:'relative'}}>
      <ParkingLot /> {/* Render Profile component */}
      </div>
    </div>
  );
};

export default View;