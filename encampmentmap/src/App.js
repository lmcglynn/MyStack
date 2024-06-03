import React from 'react';
import Popup from './components/Popup.js';
import { useState } from 'react';
// import PinButton from './components/PinButton.js';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import pinIcon from './images/map-pin.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "overlapping-marker-spiderfier-leaflet/dist/oms";

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
  { // marker 0
    coords: sum(center, [5*d, -4*d]),
    day: 8,
  },
  { // marker 1
    coords: sum(center, [2*d, -1*d]),
    day: 8,
  },
  { // marker2
    coords: sum(center, [2.8*d, 5.4*d]),
    day: 7,
  },
  { // marker 3
    coords: sum(center, [0*d, -8*d]),
    day: 7,
  },
  { // marker 4
    coords: sum(center, [4*d, 5.4*d]),
    day: 8,
  },
  { // marker 5
    coords: sum(center, [5*d, 8*d]),
    day: 2,
  },
  { // marker 6
    coords: sum(center, [15*d, 0*d]),
    day: 7,
  },
  // { // marker 
  //   coords: sum(center, [1*d, 1*d]),
  //   day: ,
  // },
]

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
  const label = marks[value-1].label;
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

  const [sliderValue, setValue] = React.useState([1, 8]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <main>
        <MapContainer center={center} zoom={18} minZoom={17} maxZoom={22} zoomSnap={0.5} style={{ height: "90vh", width: "100vw", justifyContent: "center", alignItems: "center" }}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibG1jZ2x5bm4iLCJhIjoiY2x3eTl2aG1yMWl4NTJscG43YXNpbzhhbCJ9.6mhcQQwoDKmKi2sPpi9Wug`}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            id="mapbox/streets-v11" // You can change this to other styles like 'mapbox/satellite-v9'
            tileSize={512}
            zoomOffset={-1}
            accessToken='pk.eyJ1IjoibG1jZ2x5bm4iLCJhIjoiY2x3eTl2aG1yMWl4NTJscG43YXNpbzhhbCJ9.6mhcQQwoDKmKi2sPpi9Wug'
            maxZoom={22}
          />
          {sliderValue[0] <= markers[0].day && markers[0].day <= sliderValue[1] && (
            <Marker position={markers[0].coords}
              eventHandlers={{
                click: () => {
                  setButtonPopup(true)
                  setTitle(0);
                },
              }}
            />
          )}
          {sliderValue[0] <= markers[1].day && markers[1].day <= sliderValue[1] && (
            <Marker 
            position={markers[1].coords}
              eventHandlers={{
                click: () => {
                  setButtonPopup(true)
                  setTitle(1);
                },
              }}
            />
          )}
          {sliderValue[0] <= markers[2].day && markers[2].day <= sliderValue[1] && (
            <Marker position={markers[2].coords}
              eventHandlers={{
                click: () => {
                  setButtonPopup(true)
                  setTitle(2);
                },
              }}
            />
          )}
          {sliderValue[0] <= markers[3].day && markers[3].day <= sliderValue[1] && (
            <Marker position={markers[3].coords}
              eventHandlers={{
                click: () => {
                  setButtonPopup(true)
                  setTitle(3);
                },
              }}
            />
          )}
          {sliderValue[0] <= markers[4].day && markers[4].day <= sliderValue[1] && (
            <Marker position={markers[4].coords}
              eventHandlers={{
                click: () => {
                  setButtonPopup(true)
                  setTitle(4);
                },
              }}
            />
          )}
          {sliderValue[0] <= markers[5].day && markers[5].day <= sliderValue[1] && (
            <Marker position={markers[5].coords}
              eventHandlers={{
                click: () => {
                  setButtonPopup(true)
                  setTitle(5);
                },
              }}
            />
          )}
          {sliderValue[0] <= markers[6].day && markers[6].day <= sliderValue[1] && (
            <Marker position={markers[6].coords}
              eventHandlers={{
                click: () => {
                  setButtonPopup(true)
                  setTitle(6);
                },
              }}
            />
          )}
          {/* {sliderValue[0] <= markers[].day && markers[].day <= sliderValue[1] && (
            <Marker position={markers[].coords}
              eventHandlers={{
                click: () => {
                  setButtonPopup(true)
                  setTitle();
                },
              }}
            />
          )} */}
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