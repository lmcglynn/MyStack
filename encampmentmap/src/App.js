import React from 'react';
import Popup from './components/Popup.js';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import pinIcon from './images/map-pin2.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MarkerClusterGroup from 'react-leaflet-cluster';

const customIcon = L.icon({
  iconUrl: pinIcon,
  iconSize: [24, 24], // size of the icon
  iconAnchor: [12, 24], // point of the icon which will correspond to marker's location
});

L.Marker.prototype.options.icon = customIcon;

function sum(array1, array2) {  
  return Array.from({ length: 2 }, (_, i) => 
    (array1[i] || 0) + (array2[i] || 0)
);}

const center = [34.072000, -118.442184];
const d = 0.0001;

const markers = [
  { index: 0, coords: sum(center, [5*d, -4*d]), day: 8 },
  { index: 1, coords: sum(center, [2*d, -1*d]), day: 8 },
  { index: 2, coords: sum(center, [2.8*d, 5.4*d]), day: 7 },
  { index: 3, coords: sum(center, [0*d, -8*d]), day: 7 },
  { index: 4, coords: sum(center, [4*d, 5.4*d]), day: 8 },
  { index: 5, coords: sum(center, [5*d, 8*d]), day: 2 },
  { index: 6, coords: sum(center, [15*d, 0*d]), day: 7 },
  { index: 7, coords: sum(center, [4*d, -1*d]), day: 3 },
  { index: 8, coords: sum(center, [0.7*d, 7*d]), day: 8 },
  { index: 9, coords: sum(center, [2.8*d, -7.8*d]), day: 6 },
  { index: 10, coords: sum(center, [2*d, 12*d]), day: 8 },
  { index: 11, coords: sum(center, [7*d, 5.2*d]), day: 8 },
  { index: 12, coords: sum(center, [4*d, 1*d]), day: 2 },
  { index: 13, coords: sum(center, [1*d, -3*d]), day: 1 },
  { index: 14, coords: sum(center, [-0.2*d, 3.3*d]), day: 2 },
  { index: 15, coords: sum(center, [1*d, -4.5*d]), day: 1 },
  { index: 16, coords: sum(center, [4*d, 0*d]), day: 1 },
  { index: 17, coords: sum(center, [4.8*d, 10*d]), day: 4 },
  { index: 18, coords: sum(center, [2.4*d, 14*d]), day: 4 },
  { index: 19, coords: sum(center, [-1.5*d, 14*d]), day: 4 },
  { index: 20, coords: sum(center, [5*d, 0*d]), day: 1 },
  { index: 21, coords: sum(center, [3*d, 0*d]), day: 1 },
  { index: 22, coords: sum(center, [1*d, 3*d]), day: 1 },
  { index: 23, coords: sum(center, [0.2*d, 1.2*d]), day: 1 },
  { index: 24, coords: sum(center, [0*d, 1*d]), day: 1 },
  { index: 25, coords: sum(center, [-0.6*d, -1*d]), day: 1 },
  { index: 26, coords: sum(center, [0.9*d, -3.8*d]), day: 1 },
  { index: 27, coords: sum(center, [4.2*d, 0.8*d]), day: 1 },
  { index: 28, coords: sum(center, [2.4*d, -4.5*d]), day: 1 },
  { index: 29, coords: sum(center, [0*d, 5.2*d]), day: 1 },
  { index: 30, coords: sum(center, [4.2*d, -0.8*d]), day: 2 },
  { index: 31, coords: sum(center, [3.9*d, 0.2*d]), day: 2 },
  { index: 32, coords: sum(center, [-0.2*d, 0.2*d]), day: 2 },
  { index: 33, coords: sum(center, [3.8*d, -1.4*d]), day: 2 },
  { index: 34, coords: sum(center, [5*d, -1.8*d]), day: 2 },
  { index: 35, coords: sum(center, [4.2*d, -0.4*d]), day: 2 },
  { index: 36, coords: sum(center, [4.3*d, -3.8*d]), day: 2 },
  { index: 37, coords: sum(center, [5*d, 2.8*d]), day: 2 },
  { index: 38, coords: sum(center, [1*d, 1*d]), day: 2 }, // unknown
  { index: 39, coords: sum(center, [0*d, 0*d]), day: 3 },
  { index: 40, coords: sum(center, [4.4*d, -0.6*d]), day: 3 },
  { index: 41, coords: sum(center, [3.6*d, 0*d]), day: 3 },
  { index: 42, coords: sum(center, [3.7*d, 1*d]), day: 3 },
  { index: 43, coords: sum(center, [0.9*d, 12.5*d]), day: 3 },
  { index: 44, coords: sum(center, [2.6*d, 12.7*d]), day: 4 },
  { index: 45, coords: sum(center, [3.8*d, -0.8*d]), day: 4 },
  { index: 46, coords: sum(center, [0*d, -4*d]), day: 4 },
  { index: 47, coords: sum(center, [4.3*d, 7.6*d]), day: 4 },
  { index: 48, coords: sum(center, [1.2*d, -8.2*d]), day: 4 },
  { index: 49, coords: sum(center, [0.3*d, 12.6*d]), day: 4 },
  { index: 50, coords: sum(center, [0*d, 12.8*d]), day: 4 },
  { index: 51, coords: sum(center, [0.2*d, 14.7*d]), day: 4 },
  { index: 52, coords: sum(center, [-21*d, 0*d]), day: 4 },
  { index: 53, coords: sum(center, [0*d, 9*d]), day: 4 },
  { index: 54, coords: sum(center, [0.5*d, 8.3*d]), day: 4 },
  { index: 55, coords: sum(center, [-0.6*d, 13.7*d]), day: 4 },
  { index: 56, coords: sum(center, [0.1*d, 12*d]), day: 4 },
  { index: 57, coords: sum(center, [4*d, 6.5*d]), day: 4 },
  { index: 58, coords: sum(center, [-8.7*d, -24*d]), day: 5 },
  { index: 59, coords: sum(center, [6.5*d, 14*d]), day: 5 },
  { index: 60, coords: sum(center, [5*d, 3.5*d]), day: 5 },
  { index: 61, coords: sum(center, [5*d, 1*d]), day: 5 },
  { index: 62, coords: sum(center, [2.1*d, -8.3*d]), day: 5 },
  { index: 63, coords: sum(center, [-8*d, -27.5*d]), day: 5 },
  { index: 64, coords: sum(center, [7.5*d, 2.2*d]), day: 5 },
  { index: 65, coords: sum(center, [-2*d, 5*d]), day: 5 },
  { index: 66, coords: sum(center, [-4*d, 5.2*d]), day: 5 },
  { index: 67, coords: sum(center, [1*d, 1*d]), day: 6 }, // unknown
  { index: 68, coords: sum(center, [1.5*d, 5.5*d]), day: 6 },
  { index: 69, coords: sum(center, [1*d, 5.3*d]), day: 6 },
  { index: 70, coords: sum(center, [3.1*d, 6.5*d]), day: 6 },
  { index: 71, coords: sum(center, [4*d, 13.5*d]), day: 6 },
  { index: 72, coords: sum(center, [1*d, 11.5*d]), day: 6 },
  { index: 73, coords: sum(center, [2*d, 5.4*d]), day: 6 },
  { index: 74, coords: sum(center, [1.2*d, 11.8*d]), day: 6 },
  { index: 75, coords: sum(center, [-0.9*d, 6*d]), day: 7 },
  { index: 76, coords: sum(center, [2.3*d, 12.5*d]), day: 7 },
  { index: 77, coords: sum(center, [2.2*d, 6.3*d]), day: 7 }, // confirmation?
  { index: 78, coords: sum(center, [-0.2*d, 5.4*d]), day: 7 },
  { index: 79, coords: sum(center, [0.8*d, 6*d]), day: 7 },
  { index: 80, coords: sum(center, [0.5*d, 5.5*d]), day: 7 },
  { index: 81, coords: sum(center, [3.7*d, 9.5*d]), day: 7 },
  { index: 82, coords: sum(center, [3.7*d, 5.7*d]), day: 7 },
  { index: 83, coords: sum(center, [2*d, -15*d]), day: 7 },
  { index: 84, coords: sum(center, [13*d, 6*d]), day: 7 },
  { index: 85, coords: sum(center, [1*d, 1*d]), day: 7 }, // unknown
  { index: 86, coords: sum(center, [2*d, -10.5*d]), day: 7 },
  { index: 87, coords: sum(center, [1.5*d, -15.5*d]), day: 7 },
  { index: 88, coords: sum(center, [3.2*d, 9.6*d]), day: 7 },
  { index: 89, coords: sum(center, [-0.1*d, 7.7*d]), day: 7 },
  { index: 90, coords: sum(center, [2.1*d, -7*d]), day: 8 }, 
  { index: 91, coords: sum(center, [1*d, 1*d]), day: 8 }, // unknown
  { index: 92, coords: sum(center, [1*d, 1*d]), day: 8 }, // unknown
  { index: 93, coords: sum(center, [3.5*d, 6.3*d]), day: 8 },
  { index: 94, coords: sum(center, [1.3*d, -14*d]), day: 8 },
  { index: 95, coords: sum(center, [1.9*d, -18*d]), day: 8 },
  { index: 96, coords: sum(center, [2.9*d, 5.9*d]), day: 8 },
  { index: 97, coords: sum(center, [15.4*d, -5*d]), day: 8 },
  { index: 98, coords: sum(center, [-20.6*d, 15*d]), day: 8 },
  { index: 99, coords: sum(center, [1.9*d, -10*d]), day: 8 },
  { index: 100, coords: sum(center, [1.1*d, -2*d]), day: 8 },
  { index: 101, coords: sum(center, [2.4*d, 5.8*d]), day: 8 },
  // { index: , coords: sum(center, [1*d, 1*d]), day:  },
]

const marks = [
  { value: 1, label: '4/25' },
  { value: 2, label: '4/26' },
  { value: 3, label: '4/27' },
  { value: 4, label: '4/28' },
  { value: 5, label: '4/29' },
  { value: 6, label: '4/30' },
  { value: 7, label: '5/1' },
  { value: 8, label: '5/2' },
];

function valueLabelFormat(value) {
  const label = marks[value-1].label;
  return `${label}`;
}

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [title, setTitle] = useState();

  const [sliderValue, setValue] = React.useState([1, 8]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <main>
        <MapContainer 
        center={center} 
        zoom={18} 
        minZoom={17} 
        maxZoom={22} 
        zoomSnap={0.5} 
        maxBounds={[[center[0]-0.01, center[1]-0.015], [center[0]+0.007, center[1]+0.007]]} // Southwest and Northeast coordinates
        maxBoundsViscosity={1.0}
        style={{ height: "90vh", width: "100vw", justifyContent: "center", alignItems: "center" }}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibG1jZ2x5bm4iLCJhIjoiY2x3eTl2aG1yMWl4NTJscG43YXNpbzhhbCJ9.6mhcQQwoDKmKi2sPpi9Wug`}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Interactive by Liam McGlynn, Data Editor'
            id="mapbox/streets-v11" // You can change this to other styles like 'mapbox/satellite-v9'
            tileSize={512}
            zoomOffset={-1}
            accessToken='pk.eyJ1IjoibG1jZ2x5bm4iLCJhIjoiY2x3eTl2aG1yMWl4NTJscG43YXNpbzhhbCJ9.6mhcQQwoDKmKi2sPpi9Wug'
            maxZoom={22}
          />
          <MarkerClusterGroup maxClusterRadius={40}>
            {markers
              .filter(marker => sliderValue[0] <= marker.day && marker.day <= sliderValue[1])
              .map(marker => (
                <Marker
                  key={marker.index}
                  position={marker.coords}
                  icon={customIcon}
                  eventHandlers={{
                    click: () => {
                      setButtonPopup(true);
                      setTitle(marker.index);
                    },
                    mouseover: (e) => {
                      e.target.getElement().classList.add('marker-icon');
                    },
                    mouseout: (e) => {
                      e.target.getElement().classList.remove('marker-icon');
                    },
                  }}
                />
              ))}
          </MarkerClusterGroup>
        </MapContainer>
        <div className='slider-box'>
        <Box sx={{ width: "60vw", minWidth: 300 }}>
          <Slider
            value={sliderValue}
            onChange={handleChange}
            valueLabelDisplay="off"
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            min={1}
            max={8}
            sx={{
              width: "60vw",
              minWidth: 300,
              color: 'info.main',
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