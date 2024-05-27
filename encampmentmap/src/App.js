import Popup from './components/Popup';
import { useState } from 'react';
import PinButton from './components/PinButton';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [title, setTitle] = useState();

  return (
    <div className="App">
      <main>
        <div className="background">
        <PinButton name="photo0" className="photo0" onClick={() => { setButtonPopup(true); setTitle(0) }} />
        <PinButton name="photo1" className="photo1" onClick={() => { setButtonPopup(true); setTitle(1) }} />
        <PinButton name="photo2" className="photo2" onClick={() => { setButtonPopup(true); setTitle(2) }} />
        </div>
      </main>

      <Popup popupTitle={title} trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>
  );
}

export default App;
