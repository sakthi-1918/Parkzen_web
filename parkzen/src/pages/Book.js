// Books.js
import React from 'react';
import Booking from '../components/Booking'; // Import your Booking component
import Navigationbar from '../components/Navigationbar'; // Import the Navibar component
//import './Books.css'; // Import your custom CSS if needed

const BooksPage = () => {
  return (
    <div className="books-page">
      <Navigationbar />
      <div style={{ paddingTop: '100px', position: 'relative' }}>
        {/* <h2>Book Your Parking Slot</h2> */}
        <Booking /> {/* Render the Booking component */}
      </div>
    </div>
  );
};

export default BooksPage;
