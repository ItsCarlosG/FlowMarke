// Inicializar el mapa
var map = L.map('map').setView([4.5, -74], 13); // Coordenadas para Colombia

// Cargar el mapa desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Marcadores de ejemplo (puedes personalizar con datos reales)
var marker1 = L.marker([4.5, -74.1]).addTo(map).bindPopup('Servicio de Plomería');
var marker2 = L.marker([4.52, -74.05]).addTo(map).bindPopup('Servicio de Electricidad');
var marker3 = L.marker([4.48, -74.03]).addTo(map).bindPopup('Servicio de Carpintería');

// Mostrar la distancia seleccionada
const radiusFilter = document.getElementById('radiusFilter');
const radiusValue = document.getElementById('radiusValue');

radiusFilter.addEventListener('input', function () {
    radiusValue.textContent = `${this.value} km`;
});
