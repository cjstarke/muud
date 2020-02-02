const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const API_KEY = `007784564fb0f3e6e667f9517d40eaa4`

const button = document.querySelector('#button')
const ans = document.querySelector("#return");
let lat = 0
let lon = 0
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    ans.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude
  lon = position.coords.longitude
  let categories = async function () {
    await axios.get(BASE_URL + `lat=${lat}&lon=${lon}` +'&units=imperial' + '&APPID=' + API_KEY)
      .then(res => { 
        //console.log(res.data)
        //console.log(res.data.weather[0].description)
        ans.innerHTML =`You are in ${res.data.name} and it is ${res.data.main.temp} degrees with ${res.data.weather[0].description}`;
    }).catch(err => {
      console.log(err)
    })
  }
  categories()
}


