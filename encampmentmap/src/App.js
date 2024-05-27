import Popup from './components/Popup';
import { useState } from 'react';
import PinButton from './components/PinButton';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>Encampment Map</h1>
        <br /><br />
        <PinButton name="photo1" onClick={() => alert('click')} />
      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My popup</h3>
        <p>This is my popup</p>
      </Popup>
    </div>
  );
}

export default App;
