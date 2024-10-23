// Booking.js
import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(true); // Show confirmation after form submission
  };

  return (
    <div className="booking-container">
      <h2>Book your slot</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            type="text"
            id="vehicleNumber"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingDate">Date:</label>
          <input
            type="date"
            id="bookingDate"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingTime">Time:</label>
          <input
            type="time"
            id="bookingTime"
            value={bookingTime}
            onChange={(e) => setBookingTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="book-btn">Book Now</button>
      </form>
      
      {confirmation && (
        <div className="confirmation-message">
          <h3>Booking Confirmed!</h3>
          <p><strong>Vehicle Number:</strong> {vehicleNumber}</p>
          <p><strong>Date:</strong> {bookingDate}</p>
          <p><strong>Time:</strong> {bookingTime}</p>
        </div>
      )}
    </div>
  );
};

export default Booking;
