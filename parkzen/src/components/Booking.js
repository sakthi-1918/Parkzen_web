import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const location = useLocation();
    const slotTitle = location.state?.slotTitle || ''; // Retrieve slot title from the location state
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [slotNumber, setSlotNumber] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState(slotTitle); // Initialize title with slotTitle
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Load stored email from local storage
    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) setEmail(storedEmail);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3005/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    vehicleNumber, 
                    date, 
                    startTime, 
                    endTime, 
                    slotNumber, 
                    email, 
                    title 
                }),
            });

            if (!response.ok) throw new Error(await response.json().message || 'Failed to book slot');
            
            const data = await response.json();
            setConfirmationMessage(data.message);
            setErrorMessage('');
            
            // Reset form fields
            setVehicleNumber('');
            setDate('');
            setStartTime('');
            setEndTime('');
            setSlotNumber('');
            setEmail('');
            setTitle(slotTitle); // Reset title back to the initial slot title
        } catch (error) {
            setErrorMessage(error.message);
            setConfirmationMessage('');
        }
    };

    return (
        <div className="booking-container">
            <h4>Book your slot</h4>
            <h4>Slot Title: {slotTitle}</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Vehicle Number</label>
                    <input 
                        type="text" 
                        value={vehicleNumber} 
                        onChange={(e) => setVehicleNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Start Time</label>
                    <input 
                        type="time" 
                        value={startTime} 
                        onChange={(e) => setStartTime(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>End Time</label>
                    <input 
                        type="time" 
                        value={endTime} 
                        onChange={(e) => setEndTime(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Slot Number</label>
                    <input 
                        type="text" 
                        value={slotNumber} 
                        onChange={(e) => setSlotNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} // Update title state
                        required 
                    />
                </div>
                <button type="submit" className="book-btn">Book Now</button>
            </form>
            {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default Booking;
