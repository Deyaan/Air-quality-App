const api = {
    key: "eeac861346d64e21a2cbac71d6dd54e8",
    base: "https://api.weatherbit.io/v2.0/history/airquality"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode === 13) {
        getResults(searchbox.value);
    }
}

function getResults(query) {
    fetch(`${api.base}?&city=${query}&key=${api.key} `)
    .then(weather => {
            return weather.json();

        }).then(displayResults);
}

function displayResults(weather) {
   
    //console.log(review());
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.city_name}, ${weather.country_code}`;
      
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.data[0].aqi)}`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = `hello`
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `Carbon-dioxide Level = ${Math.round(weather.data[0].co)}`;

    let nitrogen = document.querySelector('.nitrogen');
    nitrogen.innerText = `Nitrogen Level = ${Math.round(weather.data[0].no2)}`;

    let oxygen = document.querySelector('.oxygen');
    oxygen.innerText = `Oxygen Level = ${Math.round(weather.data[0].o3)}`;
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

function review(){
    if(temp.innerHTML<=50){
      weather_el.innerText = `The Climate is Healthy..`
    }
    else if(temp.innerHTML>50 && temp.innerHTML<101){
      weather_el.innerText = `The Climate is Moderate..`
    }
    else if(temp.innerHTML>100 && temp.innerHTML<151){
        weather_el.innerText = `The Climate is Unhealthy for sensitive groups..`
      }
      else if(temp.innerHTML>150 && temp.innerHTML<201){
        weather_el.innerText = `The Climate is Unhealthy for everyone..`
      }
      else if(temp.innerHTML>200 && temp.innerHTML<301){
        weather_el.innerText = `The Climate is Very Unhealthy..`
      }
      else if(temp.innerHTML>300 && temp.innerHTML<501){
        weather_el.innerText = `The climate is Hazardous..`
      }
}