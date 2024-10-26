import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserCard() {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [hoveredButtons, setHoveredButtons] = useState({});

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/slots');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setSlots(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSlots();
  }, []);

  const handleBookClick = (slotTitle) => {
    navigate('/book', { state: { slotTitle } });
  };

  const handleViewClick = (slotId) => {
    navigate(`/view1/${slotId}`);
  };

  if (loading) return <div className="text-center mt-4">Loading slots...</div>;
  if (error) return <div className="text-danger text-center mt-4">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {slots.map((slot, index) => {
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
                      src={`http://localhost:3005/images/${slot.image}`}
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
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => handleBookClick(slot.title)} // Pass the slot title here
                        >
                          Book
                        </button>
                        <button
                          type="button"
                          className="btn"
                          style={{
                            backgroundColor: '#00008B',
                            color: hoveredButtons[slot._id] ? '#ff6347' : '#fff',
                            borderColor: '#00008B',
                          }}
                          onMouseEnter={() => setHoveredButtons(prev => ({ ...prev, [slot._id]: true }))}
                          onMouseLeave={() => setHoveredButtons(prev => ({ ...prev, [slot._id]: false }))}
                          onClick={() => handleViewClick(slot._id)}
                        >
                          View
                        </button>
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
