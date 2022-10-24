console.log("[map.js]");

var bialystok = {lat: 53.133, lng: 23.155};
// used in mapOptions
// to move the viewpoint north, decrease lat

var mapOptions = {
  center: bialystok,
  zoom: 14
}

function initMap() {

    var image = {
      url: 'images/map_icon_mini.png',
      size: new google.maps.Size(50, 50),
      scaledSize: new google.maps.Size(50, 50)
    }; // end of var image
  
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var markersArray = [];
  
    $.each(jFlats, function(index, jFlat) {
      console.log(jFlat.coordinates);
    
      var marker = new google.maps.Marker({
        position: jFlat.coordinates,
        map: map,
        title: 'Hello World!',
        icon: image,
      }); // end of var marker
    
      var infowindow = new google.maps.InfoWindow({
        content: jFlat.flat_name+"<br><br><b>"+jFlat.address+"</b><br><br>"+" "
        +jFlat.description_short+"<br><br>"
        +"<a href='#' onclick='showFlat("+jFlat.flat_id+")' flat-id="+jFlat.flat_id+">Więcej</a>",
      }); // end of var infowindow
  
      marker.addListener('click', function() {
  
        infowindow.open(map, marker);
  
      }); // end of marker.addListener
  
    }); // end of $.each

}; // end of initMap

function showFlat(flat_id){
  console.log("showing flat: "+flat_id);
  document.location.href = 'flats.php?showFlat='+flat_id;
}







   

