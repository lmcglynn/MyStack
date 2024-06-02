import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import PopupButton from './PopupButton'; // Import your custom PopupButton component
import './Map.css';

// Fix for default marker icon not displaying correctly
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

const MyMap = () => {
  const center = [51.505, -0.09]; // Center of the map, e.g., London
  const markers = [
    { position: [51.505, -0.09], popupTitle: 'first' },
    { position: [51.515, -0.1], popupTitle: 'second' },
    { position: [51.525, -0.11], popupTitle: 'third' },
  ];

  return (
    <MapContainer center={center} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, idx) => (
        <CustomMarker key={`marker-${idx}`} position={marker.position} popupTitle={marker.popupTitle} />
      ))}
    </MapContainer>
  );
};

const CustomMarker = ({ position, popupTitle }) => {
  return (
    <div
      className="custom-marker"
      style={{ position: 'absolute', transform: `translate(${position[0]}px, ${position[1]}px)` }}
    >
      <PopupButton popupTitle={popupTitle} />
    </div>
  );
};

export default MyMap;
