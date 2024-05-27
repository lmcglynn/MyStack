const FAmap = L.map('map').setView([34.04, -118.43], 12);
const oms = new OverlappingMarkerSpiderfier(FAmap, {
  keepSpiderfied: true,
  markersWontMove: true,
});

const isMobile = window.matchMedia('(max-width: 480px)').matches;

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 11,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoibG1jZ2x5bm4iLCJhIjoiY2w5b3kwcGt4MGs3MTNubXpndnZiejducCJ9.BzJIfotPme1oLEC42gDBrA',
  }
).addTo(FAmap);

const categories = {
  'Actual Fire': {
    markers: [],
    hexCode: '#d3392d',
    iconUrl: 'Pins-1/red-pin-copy.svg',
  },
  'Fire Alarm': {
    markers: [],
    hexCode: '#ff8b17',
    iconUrl: 'Pins-1/orange-pin.svg',
  },
};

FAgeojson.features.map(feature => {
  const coords = [
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ];
  // if crime has multiple categories, only use first one
  const cat = feature.properties.CATEGORY.split('\n')[0];
  const pinIcon = L.icon({
    iconUrl: categories[cat].iconUrl,
    iconSize: [35, 35],
  });
  const marker = new L.marker(coords, { icon: pinIcon });

  const popUpText = `<b>${feature.properties.DATE}</b><br/><br/>
    <b>Event:</b><br/>
    ${feature.properties.EVENT.split('\n').join('<br/>')}<br/><br/>
    <b>Reported location:</b><br/>
    ${feature.properties.LOCATION.split('\n').join(',<br/>')}<br/><br/>
    <b>Time:</b><br/>
    ${feature.properties.TIME}`;
  const popUpOptions = {
    className: 'custom-popup',
    maxWidth: isMobile ? 200 : 300,
  };
  marker.bindPopup(popUpText, popUpOptions);

  categories[cat].markers.push(marker);
  marker.addTo(FAmap);
  oms.addMarker(marker);
});

const overlayLayers = {};
Object.entries(categories).forEach(([key, val]) => {
  const legendText = `
		<div class="legend-container">
			<div class="legend-box" style="background:${val.hexCode};"></div>
			<div class="legend-text">${key}</div>
		</div>`;
  overlayLayers[legendText] = L.layerGroup(val.markers);
});
Object.values(overlayLayers).forEach(layer => layer.addTo(FAmap));
L.control.layers(null, overlayLayers, { collapsed: isMobile }).addTo(FAmap);

// create custom header for layering control (legend)
const header = document.createElement('h3');
header.setAttribute('class', 'legend-header');
const headerText = document.createTextNode('Category');
header.appendChild(headerText);
const layerControl = document.getElementsByClassName(
  'leaflet-control-layers-list'
)[0];
layerControl.insertBefore(header, layerControl.childNodes[0]);
