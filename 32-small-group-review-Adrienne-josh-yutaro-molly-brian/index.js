const BASE_URL = 'https://weather-app-rails.herokuapp.com/'


const weatherDisplay = document.getElementById('weather-display');
const form =document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target.value)
    // console.log(e)
    const location = document.getElementById('location')
    // location = e.target.elements['name']
    fetchLocation(location.value)
})  
// let loc = fetchLocation('98133')
// console.log(loc);

function fetchLocation(zip){
    let url = BASE_URL +'location/' + zip
    fetch(url)
    .then(response => response.json())

    .then(data => {render(data.results[0].geometry.location)})
}
//wont work here 
// render('98148')
const render = (data) => {
    //destructuring the object
  const{lat,lng} = data
//   console.log(lat, lng, 'this is lat and lon')
sendToWeather(lat,lng);

}
// function render(data) {
//     //destructuring the object
//   const{lat,lng} = data
// //   console.log(lat, lng, 'this is lat and lon')
// sendToWeather(lat,lng);

// }

function sendToWeather(lat, lng) {
    const weather =  `weather?loc=${lat}_${lng}`
    const url = BASE_URL + weather

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    // .then(data => renderWeather(data))

}

function renderWeather(weatherData){
    const daily = weatherData.daily.data
    // console.log(daily);
    const ul = document.createElement('ul')
    clearDisplay()
    daily.forEach(day => {
        // console.log(day, 'day')
        console.log(day.summary)
        ul.appendChild(renderSummary(day.summary))
    });
    weatherDisplay.appendChild(ul)
}

function renderSummary(summary) {
    const li = document.createElement('li')
    li.textContent = summary
    return li
}

function clearDisplay(){
    while( weatherDisplay.firstChild) {
        weatherDisplay.firstChild.remove()
    }
}