import React, { useState } from 'react';
import './Slots.css';

function ParkingLot() {
  const sections = [
    { slots: Array(15).fill(false) },   // Top-left corner section
    { slots: Array(24).fill(false) },  // Center-left section
    { slots: Array(24).fill(false) },  // Center-right section
    { slots: Array(10).fill(false) },   // Rightmost vertical section
  ];

  const [parkingSections, setParkingSections] = useState(sections);

  const handleSlotClick = (sectionIndex, slotIndex) => {
    const newSections = [...parkingSections];
    newSections[sectionIndex].slots[slotIndex] = !newSections[sectionIndex].slots[slotIndex];
    setParkingSections(newSections);
  };

  return (
    <div className="parking-lot">
      <h2>Book your Slot</h2>

      {/* Top-left corner section */}
      <div className="top-left-corner">
        {parkingSections[0].slots.map((isOccupied, slotIndex) => (
          <div
            key={slotIndex}
            className={`slot ${isOccupied ? 'occupied' : 'available'}`}
            onClick={() => handleSlotClick(0, slotIndex)}
          >
            {isOccupied ? 'Occupied' : `Slot ${slotIndex + 1}`}
          </div>
        ))}
      </div>

      {/* Center area with two sections */}
      <div className="center-area">
        {/* Center-left section */}
        <div className="center-left">
          {Array(2).fill(0).map((_, rowIndex) => (
            <div key={rowIndex} className="center-row">
              {parkingSections[1].slots.slice(rowIndex * 5, (rowIndex + 1) * 5).map((isOccupied, slotIndex) => (
                <div
                  key={slotIndex + rowIndex * 5}
                  className={`slot ${isOccupied ? 'occupied' : 'available'}`}
                  onClick={() => handleSlotClick(1, slotIndex + rowIndex * 5)}
                >
                  {isOccupied ? 'Occupied' : `Slot ${slotIndex + 1 + rowIndex * 5}`}
                </div>
              ))}
            </div>
          ))}
          <div className="horizontal-gap" />
          {Array(2).fill(0).map((_, rowIndex) => (
            <div key={rowIndex} className="center-row">
              {parkingSections[1].slots.slice(10 + rowIndex * 5, 15 + rowIndex * 5).map((isOccupied, slotIndex) => (
                <div
                  key={slotIndex + 10 + rowIndex * 5}
                  className={`slot ${isOccupied ? 'occupied' : 'available'}`}
                  onClick={() => handleSlotClick(1, slotIndex + 10 + rowIndex * 5)}
                >
                  {isOccupied ? 'Occupied' : `Slot ${slotIndex + 11 + rowIndex * 5}`}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Center-right section */}
        <div className="center-right">
          {Array(2).fill(0).map((_, rowIndex) => (
            <div key={rowIndex} className="center-row">
              {parkingSections[2].slots.slice(rowIndex * 5, (rowIndex + 1) * 5).map((isOccupied, slotIndex) => (
                <div
                  key={slotIndex + rowIndex * 5}
                  className={`slot ${isOccupied ? 'occupied' : 'available'}`}
                  onClick={() => handleSlotClick(2, slotIndex + rowIndex * 5)}
                >
                  {isOccupied ? 'Occupied' : `Slot ${slotIndex + 1 + rowIndex * 5}`}
                </div>
              ))}
            </div>
          ))}
          <div className="horizontal-gap" />
          {Array(2).fill(0).map((_, rowIndex) => (
            <div key={rowIndex} className="center-row">
              {parkingSections[2].slots.slice(10 + rowIndex * 5, 15 + rowIndex * 5).map((isOccupied, slotIndex) => (
                <div
                  key={slotIndex + 10 + rowIndex * 5}
                  className={`slot ${isOccupied ? 'occupied' : 'available'}`}
                  onClick={() => handleSlotClick(2, slotIndex + 10 + rowIndex * 5)}
                >
                  {isOccupied ? 'Occupied' : `Slot ${slotIndex + 11 + rowIndex * 5}`}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Rightmost vertical section */}
      <div className="right-corner">
        {parkingSections[3].slots.map((isOccupied, slotIndex) => (
          <div
            key={slotIndex}
            className={`slot vertical-slot ${isOccupied ? 'occupied' : 'available'}`}
            onClick={() => handleSlotClick(3, slotIndex)}
          >
            {isOccupied ? 'Occupied' : `Slot ${slotIndex + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParkingLot;
