const BASE_URL = 'https://weather-app-rails.herokuapp.com'

const LOCATION_ENDPOINT = '/location/'

const WEATHER_ENDPOINT = '/weather?loc='

const locationInput = document.getElementById('location')

const locationButton = document.getElementById('location-submit')

const weatherDisplay = document.getElementById('weather-display')

locationButton.addEventListener('click', (ev) => {
  ev.preventDefault()
  let location = locationInput.value
  getCoordinates(location)
})

function getCoordinates(location) {
  fetch(BASE_URL + LOCATION_ENDPOINT + location)
    .then(res => res.json())
    .then(data => {
      let obj = data.results[0].geometry.location
      getWeather(obj)
    })
}

function getWeather(obj) {
  fetch(BASE_URL + WEATHER_ENDPOINT + obj.lat + "_" + obj.lng)
    .then(res => res.json())
    .then(data => {
      renderWeather(data)
    })
}

function renderWeather(data) {
  weatherDisplay.textContent = data.daily.summary
  let today = data.daily.data[0]
  let date = Date(Date.now()).toString()
  let p = document.createElement('p')
  p.textContent = date
  weatherDisplay.appendChild(p)
}