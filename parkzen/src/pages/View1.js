import ParkingLot from "../components/Slots1";
import React from 'react';
// Correct path to import Profile
import Navibar from '../components/Navigationbar';

const View1 = () => {
  return (
    <div>
      <Navibar/>
      <div style={{paddingTop:'90px',position:'relative'}}>
      <ParkingLot /> {/* Render Profile component */}
      </div>
    </div>
  );
};

export default View1;