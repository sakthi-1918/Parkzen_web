// src/pages/HomePage.js
import React from 'react';
import  Navibar from '../components/Navigationbar';
import UserCard from '../components/Location';

function Options() {
  return (
    <div>
      
      <Navibar />
      <div style={{paddingTop:'90px',position:'relative'}}>
      <UserCard/>
      </div>
    </div>
  );
}

export default Options;
