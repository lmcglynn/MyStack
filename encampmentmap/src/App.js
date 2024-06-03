import React from 'react';
import Popup from './components/Popup.js';
import { useState, useEffect } from 'react';
// import PinButton from './components/PinButton.js';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import pinIcon from './images/map-pin.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "overlapping-marker-spiderfier-leaflet/dist/oms";
const OverlappingMarkerSpiderfier = window.OverlappingMarkerSpiderfier;

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
    index: 0,
    coords: sum(center, [5*d, -4*d]),
    day: 8,
  },
  { // marker 1
    index: 1,
    coords: sum(center, [2*d, -1*d]),
    day: 8,
  },
  { // marker2
    index: 2,
    coords: sum(center, [2.8*d, 5.4*d]),
    day: 7,
  },
  { // marker 3
    index: 3,
    coords: sum(center, [0*d, -8*d]),
    day: 7,
  },
  { // marker 4
    index: 4,
    coords: sum(center, [4*d, 5.4*d]),
    day: 8,
  },
  { // marker 5
    index: 5,
    coords: sum(center, [5*d, 8*d]),
    day: 2,
  },
  { // marker 6
    index: 6,
    coords: sum(center, [15*d, 0*d]),
    day: 7,
  },
  // { // marker 
  //   index: ,
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

function Spiderfier({ sliderValue, setButtonPopup, setTitle }) {
  const map = useMap();

  useEffect(() => {
    const oms = new OverlappingMarkerSpiderfier(map, { keepSpiderfied: true });

    const newMarkers = markers
      .filter(marker => sliderValue[0] <= marker.day && marker.day <= sliderValue[1])
      .map((marker) => {
        const leafletMarker = L.marker(marker.coords, { icon: customIcon })
          .addTo(map)
          .on('click', () => {
            setButtonPopup(true);
            setTitle(marker.index);
          });
        oms.addMarker(leafletMarker);
        return leafletMarker;
      });


    return () => {
      newMarkers.forEach(marker => map.removeLayer(marker));
    };
  }, [map, sliderValue, setButtonPopup, setTitle]);

  return null;
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
          <Spiderfier sliderValue={sliderValue} setButtonPopup={setButtonPopup} setTitle={setTitle} />
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