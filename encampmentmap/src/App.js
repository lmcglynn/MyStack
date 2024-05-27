import React, { useState } from 'react';
import MapWithPins from './components/MapWithPins';

const App = () => {
  const [pins, setPins] = useState([
    { top: 40, left: 30 },
    { top: 60, left: 50 },
    // Add more pins as needed
  ]);

  const handlePinClick = (pin) => {
    alert(`Pin at ${pin.top}%, ${pin.left}% clicked!`);
  };

  return (
    <div className="App">
      <h1>Map with Clickable Pins</h1>
      <MapWithPins pins={pins} onPinClick={handlePinClick} />
    </div>
  );
};

export default App;
