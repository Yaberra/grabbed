$(document).ready(function() {
    console.log("test!");

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
        console.log(navigator.geolocation)
    })
});

// This is where we make the AJAX call to Yelp. 
// We need to pass the google api location data to get restaurant location

function getRestaurants(pos) {

    //    var searchResults = $(this).data("search");

    //    var queryURL ="https://api.yelp.com/v3/businesses/restaurants      "
    //    }

    //    $.ajax({
    //    url:queryURL
    //    method;"GET"
    //    }). done(function)(response){

    //    var search = response.data;
    //    for(i=0;i<results.length; i++);

    //    var name = // response.restaurant.name  
    //    var address = // response.restaurant.location.display_address 
    //    var phone = // response.restaurant.phone 
    //    var rating =// response.restaurant.rating 
    //    var review = // response.restaurant.review_count  
    //    var price = // response.restaurant.price 
    //    var deals= // response.restaurant.deals
    //    var open =  // response.restaurant.open_now 
    //    var website = // response.restaurant.url 













    // });