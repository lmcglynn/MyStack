import Popup from './components/Popup,js';
import { useState } from 'react';
import PinButton from './components/PinButton,js';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [title, setTitle] = useState();

  return (
    <div className="App">
      <main>
        <div className="map-container">
          <div className="map-content">
            <PinButton name="photo0" className="photo0" onClick={() => { setButtonPopup(true); setTitle(0) }} />
            <PinButton name="photo1" className="photo1" onClick={() => { setButtonPopup(true); setTitle(1) }} />
            <PinButton name="photo2" className="photo2" onClick={() => { setButtonPopup(true); setTitle(2) }} />
            <PinButton name="photo3" className="photo3" onClick={() => { setButtonPopup(true); setTitle(3) }} />
            <PinButton name="photo4" className="photo4" onClick={() => { setButtonPopup(true); setTitle(4) }} />
            <PinButton name="photo5" className="photo5" onClick={() => { setButtonPopup(true); setTitle(5) }} />
            <PinButton name="photo6" className="photo6" onClick={() => { setButtonPopup(true); setTitle(6) }} />
            <PinButton name="photo7" className="photo7" onClick={() => { setButtonPopup(true); setTitle(7) }} />
            <PinButton name="photo8" className="photo8" onClick={() => { setButtonPopup(true); setTitle(8) }} />
            <PinButton name="photo9" className="photo9" onClick={() => { setButtonPopup(true); setTitle(9) }} />
            <PinButton name="photo10" className="photo10" onClick={() => { setButtonPopup(true); setTitle(10) }} />
            <PinButton name="photo11" className="photo11" onClick={() => { setButtonPopup(true); setTitle(11) }} />
            <PinButton name="photo12" className="photo12" onClick={() => { setButtonPopup(true); setTitle(12) }} />
            <PinButton name="photo13" className="photo13" onClick={() => { setButtonPopup(true); setTitle(13) }} />
            <PinButton name="photo14" className="photo14" onClick={() => { setButtonPopup(true); setTitle(14) }} />
            <PinButton name="photo15" className="photo15" onClick={() => { setButtonPopup(true); setTitle(15) }} />
            <PinButton name="photo16" className="photo16" onClick={() => { setButtonPopup(true); setTitle(16) }} />
            <PinButton name="photo17" className="photo17" onClick={() => { setButtonPopup(true); setTitle(17) }} />
            <PinButton name="photo18" className="photo18" onClick={() => { setButtonPopup(true); setTitle(18) }} />
            <PinButton name="photo19" className="photo19" onClick={() => { setButtonPopup(true); setTitle(19) }} />
            <PinButton name="photo20" className="photo20" onClick={() => { setButtonPopup(true); setTitle(20) }} />
            <PinButton name="photo21" className="photo21" onClick={() => { setButtonPopup(true); setTitle(21) }} />
          </div>
        </div>
      </main>

      <Popup popupTitle={title} trigger={buttonPopup} setTrigger={setButtonPopup} />
    </div>
  );
}

export default App;
