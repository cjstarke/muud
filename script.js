const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const API_KEY = `d35422a2363a00d3221e05f52397506d`


const button = document.querySelector('#location')
const ans = document.querySelector("#return");
const newLink = document.querySelector('#getstarted')

let lat = 0
let lon = 0
//this function asks user for location priveleges on click of button

button.addEventListener("click",  getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    ans.innerHTML = "Geolocation is not supported by this browser.";
  }
})
//this function gets the coordinates and runs them through the weather api. then gives variables to other functions
function showPosition(position) {  
  lat = position.coords.latitude
  lon = position.coords.longitude
  let categories = async function () {
    await axios.get(BASE_URL + `lat=${lat}&lon=${lon}` +'&units=imperial' + '&APPID=' + API_KEY)
      .then(res => { 
        // console.log(lat)
        // console.log(lon)
        let temp = res.data.main.temp
        let descript = res.data.weather[0].id
        
        describeWeather(descript)
        //tempCalc(temp)
        
    
        mainCalc(temp)
        newLink.innerHTML = `<a  href="ring.html">
        <button class = "button" id = "start">Get Started</button>
        </a>`
        
      
        
        
    }).catch(err => {
      console.log(err)
    })
  }
  categories()
}
// this function takes the temparature and assigns it a rating
// const tempCalc = function (hello) {
//   let temp = 0
  
//   if (hello < 30) {
//     temp = 1
//   } else if (hello < 40) {
//     temp = 4
//   } else if (hello < 50) {
//     temp = 8
//   } else if (hello < 60) {
//     temp = 11
//   } else {
//     temp = 15   
//   }
  
// console.log(temp)
//   return temp
  
// }

//function takes the weather description and assigns it a rating
const describeWeather = function(description) {
  
  let descripVar = 0
  let weathertype = 'fine'
  if (description < 300) {
    descripVar = 0
    weathertype = 'stormy'
  } else if (description < 500) {
    descripVar = 4
    weathertype = 'lightly raining'
  } else if (description < 600) {
    descripVar = 2
    weathertype = 'rainy'
  } else if (description < 700) {
    descripVar = 2
    weathertype = 'snowing'
  } else if (description < 800) {
    descripVar = 7
    weathertype = 'hazy'
  } else if (description === 800) {
    descripVar = 10
    weathertype = 'clear'
  
  } else {
    descripVar = 7
    weathertype = 'cloudy' 
  }
  
  let descriptArr = [descripVar, weathertype]
  return descriptArr
}
//this function takes the day of the week and assigns it a rating
const weekday = function () {
  var week = new Date()
  var day = week.getDay()
  switch (day) {
    case 1 || 2 || 3:
      return 1  
    case 0 || 4: 
      return 10
    default:
      return 15
  }
}
//this function takes the hour of the day and assigns it a function
const dayHour = function () {
  var week = new Date()
  var day = week.getHours()
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
      return 1 
    case 0:
    case 6:
    case 7:
    case 8: 
      return 5
    case 9:
    case 10:
    case 23:
    case 24: 
      return 8
    case 11:
    case 12:
    case 13:
      return 12
    case 14:
    case 15:
    case 16:
      return 13
    case 17:
    case 18:
    case 19:
    case 20:
      return 18
    default:
      return 20
  }
}
//this function calculates a weighted random number to be assigned to a mood, then puts variables in local storage
const mainCalc = function (hello) {
  let dayOfWeek = weekday()
  let hour = dayHour()
  let weatherStyleInt = describeWeather()[0]
  let weatherStyle = describeWeather()[1]
  let temp = 0
  let myTemp = parseInt(hello)
  
  if (hello < 30) {
    temp = 1
  } else if (hello < 40) {
    temp = 4
  } else if (hello < 50) {
    temp = 8
  } else if (hello < 60) {
    temp = 11
  } else {
    temp = 15   
  }
  
  console.log(temp)
  console.log(myTemp)

  // let tempReal = tempCalc()
  let bigNum = parseInt(Math.random() * 20 + hour + weatherStyleInt + temp + dayOfWeek)
  localStorage.setItem("bigNumber", bigNum)
  localStorage.setItem("temparature", myTemp)
  localStorage.setItem("atmosphere", weatherStyle)
  
}











