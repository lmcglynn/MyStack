import React from 'react';
import './MapWithPins.css';

const MapWithPins = ({ pins, onPinClick }) => {
  return (
    <div className="map-container">
      <div className="map-content">
        {pins.map((pin, index) => (
          <div
            key={index}
            className="pin"
            style={{ top: `${pin.top}%`, left: `${pin.left}%` }}
            onClick={() => onPinClick(pin)}
          />
        ))}
      </div>
    </div>
  );
};

export default MapWithPins;