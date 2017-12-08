$(document).ready(function() {
    // This example requires that you consent to location sharing when
    // prompted by your browser. If you see the error "The Geolocation service
    // failed.", it means you probably did not give permission for the browser to
    // locate you.

    var map, infoWindow, pos;

    function initMap(lat, lng) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function(position) {
                pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                getRestaurants(pos)
                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }
    initMap();

    $(document).on('click', function() {
        console.log(pos)

    })
});

// This is where we make the AJAX call to Yelp. 
// We need to pass the google api location data to get restaurant location

    function getRestaurants(pos) {
        var settings = {
        "async": true,
        "crossDomain": true,

        "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${pos.lat}&longitude=${pos.lng}`,

        "url": 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Atlanta',

        "method": "GET",
        "headers": {
            "authorization": "Bearer uM5_8KBZq5cZd5JzuR9SwUTy4KsRUE_qcnwuSjmBjloyvJ1ZU95AkFLcsccNSLQ7EX1WvndHjcfFXAzd40aevtIW0bfJvJQcqr1faSjidDUijEIb7d9Fycri1yAoWnYx",
            "cache-control": "no-cache",
        }
    }
    $.ajax(settings).done(res => {
        console.log('working in cb')
        console.log(res)
    })
}

    var results = res.data;
    for (var i = 0; i < results.length; i++) {

    var imageThumbnail = $("<div class='col-md-4'>");
    var restaurantImage = $("<img>");
    var imageUrl = results[i].image_url;
    restaurantImage.attr("src", imageUrl)

    var businessesSearchResults = $("<div class='col-md-8'>");
    var name = results[i].name;
    console.log(name);
    var rating = $("<p>").text("Rating: " + rating);
    var phone = results[i].display_phone;
    var address = results[i].display_address;
    var website = results[i].url;


}




