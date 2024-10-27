import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import axios from 'axios';
import './Slots.css';

const ParkingLot = () => {
    const { slotId } = useParams(); // Get the slot ID from the URL
    const navigate = useNavigate(); // Initialize useNavigate for navigation
    const [parkingData, setParkingData] = useState(null);

    useEffect(() => {
        const fetchParkingData = async () => {
            try {
                const response = await axios.get('http://localhost:3005/api/slots');
                if (response.data && response.data.length > 0) {
                    // Find the parking data for the given slotId
                    const slotData = response.data.find(slot => slot._id === slotId);
                    if (slotData) {
                        setParkingData(slotData); // Set the state with the found slot data
                    } else {
                        console.error("No parking data found for the given slot ID");
                    }
                }
            } catch (error) {
                console.error("Failed to load parking data:", error);
            }
        };

        fetchParkingData();
    }, [slotId]); // Add slotId to the dependency array to refetch if it changes

    const handleBook = () => {
        navigate('/book'); // Navigate to the /book page
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
                    <p><strong>Total Slots:</strong> {parkingData.slots.length}</p> {/* Change here to use length of slots array */}
                    <p><strong>Available:</strong> {parkingData.slots.filter(slot => slot.available).length}</p> {/* Count available slots */}
                    <p><strong>Booked:</strong> {parkingData.slots.filter(slot => !slot.available).length}</p> {/* Count booked slots */}
                    <p><strong>Status:</strong> {parkingData.slots.some(slot => slot.available) ? 'Available' : 'Fully Booked'}</p>
                    <button className="book-button" onClick={handleBook}>Book</button> {/* Navigate to /book */}
                </div>
            </div>

            <div className="slots-container">
                {parkingData.slots.map((slot, index) => (
                    <div 
                        key={index} 
                        className={`slot ${slot.available ? 'available' : 'booked'}`} 
                    >
                        Slot {slot.slotNumber}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParkingLot;
