document.addEventListener("DOMContentLoaded", function() {

  const map = L.map('map').setView([57.745671381399724, 27.105280413355057], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  map.attributionControl.remove();

  //custom icon
  const pointerIcon = L.icon({
    iconUrl: '../src/pointer.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],  // horizontal offset, vertical offset
    popupAnchor: [0, -40]   // Point from which the popup should open relative to the iconAnchor
  });

  L.marker([57.745671381399724, 27.105280413355057], { icon: pointerIcon }).addTo(map)
    .bindPopup('<b>Park</b><br>Kohtume siin!')
    .openPopup();
});