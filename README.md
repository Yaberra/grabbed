# grabbed

This application allows the user to find a restaurant near by, check on wait times and make a reservation.

USER STORY:
-----------------------------------------------------------------------------------------

* As a user I want the app to find my location.  
* And show me restaurants conveniently located near me
* I quickly want to see the address, zip code, price, website and information on wait times and link to make a reservations. 

* If I decide to make a reservation I want to be able to enter my personal information and book a table. 
-----------------------------------------------------------------------------------------------

PROGRAMMING 

- This is a web-based mobile application, with the mobile first mindest that capitalizes on micro moments. 
- The user is prompted to allow Google API to find the user's location. 
- The google API location information is then passed through a YELP API Ajax call to identify the nearest restaurants. 
- Restuarant locations are displayed on google maps using google's location marker 

- The user has the ability to book restaurant of choice. 
------------------------------------------------------------------------------------------------

RUNNING THE APPLICATION 

- user opens the app that will display grabbed brand log and confirmation to access location of the user

- If user confirms the app will access the location of the user 

- The google api uses longitude and latitude locators. This is passed through the Yelp API Ajax query to identify 15 restaurants close to the user's location. 

-  We've defined the business listing as res in our function. We use the data to The app will use the database to access and store key elements - address, image, rating, address, price, website and booking. 

- The app will Display TOP 15 choices based on proximity to user.

- Using the dot notation, we created variables to pull key elements from the business array and appended to the div in the html for display.   

Team members: StaShaun, Austin, Yeti
