import React from 'react';
import './Aboutpage.css'; // Import your custom CSS
import Section1 from '../components/section1';
import Section2 from '../components/Section2';
import Navibar from '../components/Navigationbar';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navibar/>
      <div style={{paddingTop:'60px',position:'relative'}}>

      {/* Section 1 */}
      <Section1 />

      {/* Section 2 */}
      <Section2 />
      </div>
    </div>
  );
};

export default AboutPage;
