var map = L.map('map').setView([-14.235, -51.925], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var wms = L.Geoserver.wms("http://localhost:8080/geoserver/wms", {
    layers: `indigenous:indigenous_area_legal_amazon`,
});
wms.addTo(map);