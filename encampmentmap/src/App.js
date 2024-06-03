import Popup from './components/Popup.js';
import { useState } from 'react';
import PinButton from './components/PinButton.js';
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import pinIcon from './images/map-pin.png';

delete L.Icon.Default.prototype._getIconUrl;

const customIcon = L.icon({
  iconUrl: pinIcon,
  iconSize: [24, 24], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  // shadowUrl: 'leaflet/dist/images/marker-shadow.png',
  // shadowSize: [41, 41], // size of the shadow
  // shadowAnchor: [12, 41] // point of the shadow which will correspond to marker's location
});

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [title, setTitle] = useState();
  const center = [34.072000, -118.442184];
  const d = 0.0001;

  const [sliderValue, setSliderValue] = useState(1);
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="App">
      <main>
        <MapContainer center={center} zoom={17} minZoom={15} style={{ height: "90vh", width: "100vw", justifyContent: "center", alignItems: "center" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {sliderValue == 1 && (
            <Marker position={center} icon={customIcon} 
              eventHandlers={{
                click: () => {
                  console.log('marker clicked')
                  setButtonPopup(true)
                  setTitle(0);
                },
              }}
            />
          )}
          {sliderValue == 2 && (
            <Marker position={[center[0]-2*d, center[1]]} icon={customIcon}
              eventHandlers={{
                click: () => {
                  console.log('marker clicked')
                  setButtonPopup(true)
                  setTitle(1);
                },
              }}
            />
          )}
          {sliderValue == 2 && (
            <Marker position={[center[0]-2*d, center[1]+2*d]} icon={customIcon}
              eventHandlers={{
                click: () => {
                  console.log('marker clicked')
                  setButtonPopup(true)
                  setTitle(2);
                },
              }}
            />
          )}

        </MapContainer>
        <input
          type="range"
          min="1"
          max="3"
          value={sliderValue}
          onChange={handleSliderChange}
          className="slider"
        />
      </main>
      <Popup popupTitle={title} trigger={buttonPopup} setTrigger={setButtonPopup} />
    </div>
  );
}

export default App;

{/* <main>
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
      </main> */}
