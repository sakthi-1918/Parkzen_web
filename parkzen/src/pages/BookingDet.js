import React from 'react';
import BookingDetails from '../components/BookingDetails'; // Import your Booking component
import Navigationbar from '../components/Navigationbar'; // Import the Navibar component
//import './Books.css'; // Import your custom CSS if needed

const Bookdetails = () => {
  return (
    <div className="books-page">
      <Navigationbar />
      <div style={{ paddingTop: '100px', position: 'relative' }}>
        {/* <h2>Book Your Parking Slot</h2> */}
        <BookingDetails /> {/* Render the Booking component */}
      </div>
    </div>
  );
};

export default Bookdetails;