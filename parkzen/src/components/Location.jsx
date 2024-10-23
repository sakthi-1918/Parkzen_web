import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HoverableButton from './button';

export default function UserCard() {
  const [slots, setSlots] = useState([]);

  // Fetch slot data from the backend
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/slots');
        const data = await response.json();
        console.log("Fetched data:", data); // Log the response to check its structure
        setSlots(data); // Set slot data from the backend
      } catch (error) {
        console.error('Error fetching slot data:', error);
      }
    };

    fetchSlots();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {slots.map((slot, index) => {
            // Check if slot.slots is an array before processing it
            const totalSlots = Array.isArray(slot.slots) ? slot.slots.length : 0;
            const availableSlots = Array.isArray(slot.slots)
              ? slot.slots.filter(s => s.available).length
              : 0;
            const bookedSlots = totalSlots - availableSlots;

            return (
              <div className="card mb-4" key={index}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={`http://localhost:3005/images/${slot.image}`} // Updated the image path
                      className="card-img"
                      alt={slot.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{slot.title}</h5>
                      <p className="card-text text-muted">Total Number of Slots: {totalSlots}</p>
                      <div className="d-flex justify-content-between my-2">
                        <div>
                          <h6 className="mb-0">Available</h6>
                          <p className="mb-0">{availableSlots}</p>
                        </div>
                        <div>
                          <h6 className="mb-0">Booked</h6>
                          <p className="mb-0">{bookedSlots}</p>
                        </div>
                        <div>
                          <h6 className="mb-0">Status</h6>
                          <p className="mb-0">{availableSlots > 0 ? 'Available' : 'Fully Booked'}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <HoverableButton buttonText="Book" navigateTo="/book" />
                        <HoverableButton buttonText="View" navigateTo="/view"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
