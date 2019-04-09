# Fun With Multiple APIs

Up until this point, you've been able to gain a lot of experience working with a single API, rendering pretty much exactly what has been given to you from the back end. For this challenge, we will now need to access multiple back end routes. Correctly displaying the needed data will require you to take data retrieved from one fetch request and pass that data to a second route, which will return the data you can use to populate the DOM. The second route ONLY accepts latitude and longitude as position data, which explains the need for the multiple calls.

## Objectives

- Create a web site with a form that has just one input. The input will allow
users to type in a free-text description of their location. Any free text
like these will work:
  - A short zip code like `98102`
  - A city and state like `Seattle, WA`
  - A very specific address `1411 4th Ave, Seattle, WA`
  - Pretty much anything else! Try it out!

- Use whatever the user types into the input as a query to the first API endpoint (the Google Location API) when the form is submitted. 

- The data you get back from this first endpoint will contain a latitude and longitude value. Send the latitude and longitude in a `GET` request to the second API endpoint to retrieve weather data.

- Pick off data returned from the weather API and render the daily forecast provided.

## Getting started

A barebones HTML scaffold has been provided for your in `index.html`. In `index.js`, grab the appropriate DOM elements that you will need to access to submit your fetch requests.

You will use the following endpoints to access the data.

* `BASE_URL = https://weather-app-rails.herokuapp.com`
* `LOCATION_ENDPOINT = /location/${location}`
* `WEATHER_ENDPOINT = /weather?loc=${latitude}_${longitude}`

You can view these example requests in your browser:

* Location endpoints:
  * https://weather-app-rails.herokuapp.com/location/98102
  * https://weather-app-rails.herokuapp.com/location/la%20deli
  * https://weather-app-rails.herokuapp.com/location/paseos
  * https://weather-app-rails.herokuapp.com/location/Seattle%20WA
  * https://weather-app-rails.herokuapp.com/location/1411%204th%20ave%20Seattle%20WA

* Weather endpoint:
  * Seattle: https://weather-app-rails.herokuapp.com/weather?loc=47.6092787_-122.3376870302915
  * Hawaii: https://weather-app-rails.herokuapp.com/weather?loc=19.8968_-155.5828
  * Antarctica: https://weather-app-rails.herokuapp.com/weather?loc=-82.8628_135.0000

Location and weather data are being provided by Google and Dark Sky. We have
set up these routes as it is typically inadvisable to store API keys on the
front end of a client facing application.

Ultimately, how you display your forcast is completely up to you. At a
minimum your front-end should display a parsed date object followed by the
summary for each day's weather forecast.

## Stretch Goals

If you find yourself finishing this lab early, here are some other goals that will stretch your comprehension of various aspects of web development.

1. Make it look pretty! - We've purposefully left the front end of this application very bare bones. Once you have the data displayed as needed, spice up your CSS and HTML skills and make this all look a little more appealing that just plain HTML.

2. Visit the resource links below, obtain an API key or two, and refactor your code to hit these routes directly. As noted above, this is not typically best practice, but the skills gained from reading documentation and applying that knowledge are what you'll be using constantly as a developer. JUST DON'T PUSH YOUR API KEYS UP TO GITHUB.

3. Want to follow best practices? Build out a rails server with it's own endpoints to hit these APIs in a more appropriate way. This will likely take more time, but will again to help solidify the ways in which your front end interacts with the back end, giving you full control over both.

## Resources

- Location data provided by [Google's Geocoding Service](https://developers.google.com/maps/documentation/javascript/geocoding)

- Weather data provided by [Dark Sky's API](https://darksky.net/dev/docs)
