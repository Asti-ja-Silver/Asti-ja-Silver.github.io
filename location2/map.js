document.addEventListener("DOMContentLoaded", function() {

  const map = L.map('map').setView([57.73271990222284, 27.098822568822847], 15);

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

  L.marker([57.73271990222284, 27.098822568822847], { icon: pointerIcon }).addTo(map)
    .bindPopup('<b>Võsa</b><br>Kohtume siin!')
    .openPopup();
});