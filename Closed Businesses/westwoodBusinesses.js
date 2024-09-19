var westwoodBusinessesMap = new L.map("map", {
    center: new L.LatLng(34.0615709,-118.4457082),
    zoom: 17
  });
  
  L.tileLayer('https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 15,
  maxZoom: 20,
  accessToken: 'eIrQNiYvUOEj4ohs6EJ1JHb0bPKdXYtgaV42zFTbGZ78wWEdQn6FWlUJTKw4YGub'
  }
  ).addTo(westwoodBusinessesMap);
  
  //map.addLayer(layer);
  const oms = new OverlappingMarkerSpiderfier(westwoodBusinessesMap, {
  keepSpiderfied: true,
  markersWontMove: true,
  });
  const isMobile = window.matchMedia('(max-width: 480px)').matches;
  
  
  const categories = {
  'Closed': {
    markers: [],
    hexCode: '#d3392d',
    iconUrl: './red-pin.svg',
  },
  'Opened': {
    markers: [],
    hexCode: '#3dad31',
    iconUrl: './green-pin.svg',
  },
  };
  
  westwoodBusinessesGeo.features.map(feature => {
  const coords = [
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ];

  const cat = feature.properties.Status;
  const pinIcon = L.icon({
    iconUrl: categories[cat].iconUrl,
    iconSize: [35, 35],
  });
  const marker = new L.marker(coords, { icon: pinIcon });
  
  const popUpText = `<b>${feature.properties.Business}</b>`;
  const popUpOptions = {
    className: 'custom-popup',
    maxWidth: isMobile ? 200 : 300,
  };
  marker.bindPopup(popUpText, popUpOptions);
  
  categories[cat].markers.push(marker);
  marker.addTo(westwoodBusinessesMap);
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
  Object.values(overlayLayers).forEach(layer => layer.addTo(westwoodBusinessesMap));
  L.control.layers(null, overlayLayers, { collapsed: isMobile }).addTo(westwoodBusinessesMap);
  
  // create custom header for layering control (legend)
  const header = document.createElement('h3');
  header.setAttribute('class', 'legend-header');
  const headerText = document.createTextNode('Category');
  header.appendChild(headerText);
  const layerControl = document.getElementsByClassName(
  'leaflet-control-layers-list'
  )[0];
  layerControl.insertBefore(header, layerControl.childNodes[0]);