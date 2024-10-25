import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Slots.css';

const ParkingLot = () => {
    const [parkingData, setParkingData] = useState(null);

    useEffect(() => {
        const fetchParkingData = async () => {
            try {
                const response = await axios.get('http://localhost:3005/api/slots');
                if (response.data && response.data.length > 0) {
                    setParkingData(response.data[0]); // Display only the first item for this page
                }
            } catch (error) {
                console.error("Failed to load parking data:", error);
            }
        };
        fetchParkingData();
    }, []);

    const handleBook = () => {
        alert('Booking functionality not yet implemented!'); // Placeholder for booking functionality
    };

    if (!parkingData) return <p>Loading...</p>;

    return (
        <div className="parking-lot">
            <h1>{parkingData.title}</h1>
            <div className="info-box">
                <img 
                    src={`http://localhost:3005/images/${parkingData.image}`} 
                    alt="Parking Lot" 
                    className="parking-image" 
                />
                <div className="info-content">
                    <h2>Parking Info</h2>
                    <p><strong>Total Slots:</strong> {parkingData.totalSlots}</p>
                    <p><strong>Slot Number:</strong> {parkingData.available}</p>
                    <p><strong>Booked:</strong> {parkingData.booked}</p>
                    <p><strong>Status:</strong> {parkingData.status}</p>
                    <button className="book-button" onClick={handleBook}>Book</button>
                </div>
            </div>

            <div className="slots-container">
                {parkingData.slots.map((slot, index) => (
                    <div 
                        key={index} 
                        className={`slot ${slot.status === 'Available' ? 'available' : 'booked'}`}
                    >
                        Slot {slot.slotNumber}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParkingLot;
