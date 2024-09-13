document.addEventListener("DOMContentLoaded", function() {

  const map = L.map('map').setView([57.7330000, 27.0850000], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  map.attributionControl.remove();

  //custom icon
  const pointerIcon = L.icon({
    iconUrl: '../src/pointer.png',
    iconSize: [40, 40],
    popupAnchor: [0, -25]   // Point from which the popup should open relative to the iconAnchor
  });

  L.marker([57.7330000, 27.0850000], { icon: pointerIcon }).addTo(map)
    .bindPopup('<b>Põld</b><br>Kohtume siin!')
    .openPopup();
});