let bounds = [
    [0, 0], // padding
    [1080, 1920], // image dimensions
  ];
  
  // L.CRS.Simple
  //  A simple CRS that maps longitude and latitude into `x` and `y` directly.
  // May be used for maps of flat surfaces (e.g. game maps).
  let map = L.map("map", {
    crs: L.CRS.Simple,
    maxZoom: 1,
    minZoom: -4,
    maxBounds: bounds,
  });
  
  // Used to load and display a single image over
  // specific bounds of the map. Extends `Layer`.
  L.imageOverlay("grad-issue-flatpage/red-forest-trees-n8z3bf3dv0b2cj6w.jpg", bounds).addTo(map);
  
  // method fitBounds sets a map view
  // that contains the given geographical bounds with the
  // maximum zoom level possible.
  map.fitBounds(bounds);