import React from 'react';
import Profile from '../components/Profiles'; // Correct path to import Profile
import Navibar from '../components/Navigationbar';

const ProfilePage = ({ email }) => {
  return (
    <div>
      <Navibar/>
      <div style={{paddingTop:'90px',position:'relative'}}>
      <Profile email={email} />
 {/* Render Profile component */}
      </div>
    </div>
  );
};

export default ProfilePage;