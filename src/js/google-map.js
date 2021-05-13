"use strict";
// Google map for contact us page
function initMap() {
  const options = {
    zoom: 13,
    center: {lat: 19.1828, lng: 72.8402}
  };
  const map = new google.maps.Map(document.getElementById("locationMap"), options);
  const marker = new google.maps.Marker({
    position: {lat: 19.1828, lng: 72.8402},
    map: map
  });

  var contentString = '<div class="contact-us__map-content">'+
      '<p class="contact-us__map-heading">APC <span class="contact-us__map-subHead">Pharma</span></p>'+
      '<p><span>Address:</span></p>'+
      '<p>18, Sahakar, New Liberty Co-op. Hsg. Soc., Liberty Garden Cross Road No. 4, Malad (W), Mumbai – 400 064, India</p>'+
      '<p><span>Phone: </span>+91 9869-275-459</p>'+
      '<p><span>Email: </span><a href="mailto:tushar.apcpharma@gmail.com" title="Email: tushar.apcpharma@gmail.com">tushar.apcpharma@gmail.com</a></p>'+
      '</div>';

  const infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener("click", function(){
    infoWindow.open(map, marker);
  });
}