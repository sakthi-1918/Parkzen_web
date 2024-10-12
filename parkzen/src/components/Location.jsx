import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserCard() {
  const [slots, setSlots] = useState([]);

  // Fetch slot data from the backend
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/slots');
        const data = await response.json();
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
          {slots.map((slot, index) => (
            <div className="card mb-4" key={index}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={slot.image} // Ensure slot image URL is correct
                    className="card-img"
                    alt={slot.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{slot.title}</h5>
                    <p className="card-text text-muted">Total Number of Slots: {slot.slots}</p>
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <h6 className="mb-0">Available</h6>
                        <p className="mb-0">{slot.available}</p>
                      </div>
                      <div>
                        <h6 className="mb-0">Booked</h6>
                        <p className="mb-0">{slot.booked}</p>
                      </div>
                      <div>
                        <h6 className="mb-0">Status</h6>
                        <p className="mb-0">{slot.status}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary">Book</button>
                      <button className="btn btn-secondary">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
