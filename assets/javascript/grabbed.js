$( document ).ready(function() {
    console.log( "test!" );

// This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

	var map, infoWindow;

		function initMap() {
  		map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: -34.397, lng: 150.644},
    	zoom: 6
  		});
  		infoWindow = new google.maps.InfoWindow;
      
 // Try HTML5 geolocation.

  	if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(function(position) {
      	var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      	};

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
  });
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&location=seattle",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer uM5_8KBZq5cZd5JzuR9SwUTy4KsRUE_qcnwuSjmBjloyvJ1ZU95AkFLcsccNSLQ7EX1WvndHjcfFXAzd40aevtIW0bfJvJQcqr1faSjidDUijEIb7d9Fycri1yAoWnYx",
    "Cache-Control": "no-cache",
    "Postman-Token": "00a28000-9864-3346-e41b-49360c9c6c25"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});





//   	function getRestaurants(){

// 		var searchResults = $(this).data("search");

// 		var queryURL ="https://api.yelp.com/v3/businesses/restaurants      "
// 		}
		
// 		$.ajax({
// 		url:queryURL
// 		method;"GET"
// 		}). done(function)(response){

// 		var search = response.data;
// 		for(i=0;i<results.length; i++);




	
	
		
	
	
	
	
	


// });
