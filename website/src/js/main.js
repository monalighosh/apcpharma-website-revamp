"use strict";

// Google map for contact us page
function loadGoogleMap() {
  const mumbai = {lat: 19.187543, lng: 72.840801};
  const map = new google.maps.Map(document.getElementById("locationMap"), {
    zoom: 16,
    center: mumbai
  });
  const marker = new google.maps.Marker({
    position: mumbai,
    map: map
  });
}