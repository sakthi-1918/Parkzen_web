// BookingDetails.js
import React, { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Import QRCodeCanvas
import './BookingDetails.css';

const BookingDetails = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            const userEmail = localStorage.getItem('userEmail');

            if (!userEmail) {
                setError("User email is required to fetch bookings");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:3005/api/bookings?email=${userEmail}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Data fetched:', data);
                setBookings(data);
            } catch (error) {
                console.error('Fetch error:', error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className="booking-details-container">
            <h1>Booking Details</h1>
            {loading && <p>Loading bookings...</p>}
            {error && <div className="error-message">{error}</div>}
            <div className="booking-list">
                {bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <div key={booking._id} className="booking-card">
                            <p><strong>Vehicle Number:</strong> {booking.vehicleNumber}</p>
                            <p><strong>Date:</strong> {booking.date}</p>
                            <p><strong>Start Time:</strong> {booking.startTime}</p>
                            <p><strong>End Time:</strong> {booking.endTime}</p>
                            <p><strong>Slot Number:</strong> {booking.slotNumber}</p>
                            <p><strong>Email:</strong> {booking.email}</p>
                            <p><strong>Title:</strong> {booking.title}</p>
                            {/* <QRCodeCanvas value={`Vehicle Number: ${booking.vehicleNumber}, Date: ${booking.date}`} size={128} /> Generate QR Code */}
                            <QRCodeCanvas 
  value={`Vehicle Number: ${booking.vehicleNumber}, Date: ${booking.date}, Start Time: ${booking.startTime}, End Time: ${booking.endTime}, Title: ${booking.title}`} 
  size={128} 
/>

                        </div>
                    ))
                ) : (
                    !loading && <p>No bookings found.</p>
                )}
            </div>
        </div>
    );
};

export default BookingDetails;
