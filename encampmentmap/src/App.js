import React from 'react';
import Popup from './components/Popup.js';
import { useState } from 'react';
import PinButton from './components/PinButton.js';
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import pinIcon from './images/map-pin.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const customIcon = L.icon({
  iconUrl: pinIcon,
  iconSize: [24, 24], // size of the icon
  iconAnchor: [12, 24], // point of the icon which will correspond to marker's location
});

L.Marker.prototype.options.icon = customIcon;

const marks = [
  {
    value: 1,
    label: '4/25',
  },
  {
    value: 2,
    label: '4/26',
  },
  {
    value: 3,
    label: '4/27',
  },
  {
    value: 4,
    label: '4/28',
  },
  {
    value: 5,
    label: '4/29',
  },
  {
    value: 6,
    label: '4/30',
  },
  {
    value: 7,
    label: '5/1',
  },
  {
    value: 8,
    label: '5/2',
  },
];

function valueLabelFormat(value) {
  let label = marks[value-1].label;
  return `${label}`;
}

// const pinIcon = L.icon({
//   iconUrl: pinIcon,
//   iconSize: [24, 24], // size of the icon
//   iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
//   popupAnchor: [12, 24], // point from which the popup should open relative to the iconAnchor
//   // shadowUrl: 'leaflet/dist/images/marker-shadow.png',
//   // shadowSize: [41, 41], // size of the shadow
//   // shadowAnchor: [12, 41] // point of the shadow which will correspond to marker's location
// });

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [title, setTitle] = useState();
  const center = [34.072000, -118.442184];
  const d = 0.0001;

  const [sliderValue, setValue] = React.useState([1, 8]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <main>
        <MapContainer center={center} zoom={17} minZoom={12} maxZoom={22} zoomSnap={0.5} style={{ height: "90vh", width: "100vw", justifyContent: "center", alignItems: "center" }}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibG1jZ2x5bm4iLCJhIjoiY2x3eTl2aG1yMWl4NTJscG43YXNpbzhhbCJ9.6mhcQQwoDKmKi2sPpi9Wug`}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            id="mapbox/streets-v11" // You can change this to other styles like 'mapbox/satellite-v9'
            tileSize={512}
            zoomOffset={-1}
            accessToken='pk.eyJ1IjoibG1jZ2x5bm4iLCJhIjoiY2x3eTl2aG1yMWl4NTJscG43YXNpbzhhbCJ9.6mhcQQwoDKmKi2sPpi9Wug'
            maxZoom={22}
          />
          {sliderValue[0] <= 1 && 1 <= sliderValue[1] && (
            <Marker position={center}
              eventHandlers={{
                click: () => {
                  console.log('marker clicked')
                  setButtonPopup(true)
                  setTitle(0);
                },
              }}
            />
          )}
          {sliderValue[0] <= 2 && 2 <= sliderValue[1] && (
            <Marker position={[center[0] - 2 * d, center[1]]}
              eventHandlers={{
                click: () => {
                  console.log('marker clicked')
                  setButtonPopup(true)
                  setTitle(1);
                },
              }}
            />
          )}
          {sliderValue[0] <= 2 && 2 <= sliderValue[1] && (
            <Marker position={[center[0] - 2 * d, center[1] + 2 * d]}
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
        <div className='slider-box'>
        <Box sx={{ width: 300 }}>
          <Slider
            value={sliderValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            min={1}
            max={8}
            // step={1}
            sx={{
              width: 300,
              color: 'success.main',
              '& .MuiSlider-thumb': {
                borderRadius: '1px',
              },
            }}
            aria-label='Custom Marks'
            marks={marks}
          />
        </Box>
        </div>
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
