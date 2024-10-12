import React, { useState } from 'react';
import './ParkingLot.css';

const ParkingLot = () => {
  const numColumns = 5; // Number of columns
  const numRows = 10; // Number of rows per column
  const [parkingSpaces, setParkingSpaces] = useState(Array(numColumns * numRows).fill(false));

  const toggleParkingSpace = (index) => {
    setParkingSpaces(parkingSpaces.map((occupied, i) =>
      i === index ? !occupied : occupied
    ));
  };

  return (
    <div className="parking-lot">
      {Array.from({ length: numColumns }).map((_, columnIndex) => (
        <div className="column" key={columnIndex}>
          <h2 className="column-title">Column {columnIndex + 1}</h2>
          {Array.from({ length: numRows }).map((_, rowIndex) => {
            const index = columnIndex * numRows + rowIndex;
            return (
              <div
                key={index}
                className={`parking-space ${parkingSpaces[index] ? 'occupied' : 'available'}`}
                onClick={() => toggleParkingSpace(index)}
              >
                {parkingSpaces[index] ? 'Occupied' : 'Available'}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ParkingLot;
