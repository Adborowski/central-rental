console.log("[map.js]");

var bialystok = [53.133, 23.155];

function initMap() {
  var map = L.map('map').setView(bialystok, 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var icon = L.icon({
    iconUrl: 'images/map_icon_mini.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });

  $.each(jFlats, function(index, jFlat) {
    if (jFlat.removed) return;

    var marker = L.marker([jFlat.coordinates.lat, jFlat.coordinates.lng], { icon: icon }).addTo(map);

    marker.bindPopup(
      "<b>" + jFlat.flat_name + "</b><br>" +
      jFlat.address + "<br><br>" +
      jFlat.description_short + "<br><br>" +
      "<a href='flats.php?showFlat=" + jFlat.flat_id + "'>Więcej</a>"
    );
  });
}

function showFlat(flat_id) {
  document.location.href = 'flats.php?showFlat=' + flat_id;
}

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('map') && typeof L !== 'undefined') {
    initMap();
  }
});
