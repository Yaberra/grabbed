$(document).ready(function() {
    // This example requires that you consent to location sharing when
    // prompted by your browser. If you see the error "The Geolocation service
    // failed.", it means you probably did not give permission for the browser to
    // locate you.

    var map, infoWindow, pos;
    var resultsArray = [];

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

    // Make an AJAX call to Yelp to locate restaurants closest to the google api location indicator 
    // We need to pass the google api location data to get restaurant location

    function getRestaurants(pos) {
        // console.log("running the getRestaurants function");
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

        // After data comes back from the request
        // Grab and store the data-properties to display 
        // Create and store date in div tags and classes  

        $.ajax(settings).done(res => {
            console.log(res);
            results = res.businesses;
            for (var i = 0; i < results.length; i++) {

                var imageThumbnail = $("<div class='col-md-4'>");
                var restaurantImage = $("<img>");
                var imageUrl = results[i].image_url;
                restaurantImage.attr("src", imageUrl);
                console.log(imageUrl);
                restaurantImage.text(imageUrl);
                console.log(restaurantImage);

                var businessesSearchResults = $("<div class='col-md-8'>");
                var name = results[i].name;
                console.log(name);
                var name1 = $("<p>").text("Name: " + name);
                businessesSearchResults.append(name1);
                console.log(name1);

                var rating = results[i].rating;
                console.log(rating);
                var rating2 = $("<p>").text("Rating: " + rating);
                businessesSearchResults.append(rating2);
                console.log(rating2);

                var phone = results[i].display_phone;
                console.log(phone);
                var phone3 = $("<p>").text("Phone: " + phone);
                businessesSearchResults.append(phone3);
                console.log(phone3);

                var address = results[i].location.display_address;
                console.log(address);
                var address4 = $("<p>").text("Address: " + address);
                businessesSearchResults.append(address4);
                console.log(address4);

                var website = results[i].url;
                console.log(website);
                var website5 = $("<p>").text("Website: " + website);
                businessesSearchResults.append(website5);
                console.log(website5);

                // Display the results in HTML -->

                $("restuarantImage").text(imageThumbnail);
                $("content").text(businessesSearchResults);

                //Create a URL to access Open Table forms to make a reservation

            }
        })
    }

});