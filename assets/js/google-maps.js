function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 9.372484856019184, lng: 78.83395322484374};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ramanathapuram, TN, INDIA' // Title Location
    });
}