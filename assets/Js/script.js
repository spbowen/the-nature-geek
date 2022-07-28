// Initialize and add the map
function initMap() {
    // The location of Uluru
    const Florida = { lat: 28.5383, lng: -81.379234, };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: Florida,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: Florida,
      map: map,
    });
  }
  