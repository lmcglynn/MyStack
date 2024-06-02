import React, { useState } from 'react';
import Popup from './Popup';

const PopupButton = ({ popupTitle }) => {
  const [trigger, setTrigger] = useState(false);

  return (
    <>
      <button onClick={() => setTrigger(true)}>Show Popup</button>
      <Popup trigger={trigger} setTrigger={setTrigger} popupTitle={popupTitle} />
    </>
  );
};

export default PopupButton;