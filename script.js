const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const API_KEY = `d35422a2363a00d3221e05f52397506d`


const button = document.querySelector('#location')
const ans = document.querySelector("#return");
const newLink = document.querySelector('#getstarted')

let lat = 0
let lon = 0
//this function calls an api to get the user's location

button.addEventListener("click", async function () {
  
  let otherurl = `http://ip-api.com/json/`

  let response = await axios.get(otherurl)
  let result = response.data
  showPosition(result)
  
  
})
//this function gets the coordinates and runs them through the weather api. then gives variables to other functions
function showPosition(position) {  
   lat = position.lat
   lon = position.lon
  let categories = async function () {
    await axios.get(BASE_URL + `lat=${lat}&lon=${lon}` +'&units=imperial' + '&APPID=' + API_KEY)
      .then(res => {
        let temp = res.data.main.temp
        let descript = res.data.weather[0].id
        let weathArr = [temp, describeWeather(descript)[0], describeWeather(descript)[1]]
        
    
        mainCalc(weathArr)
        newLink.innerHTML = `<a  href="ring.html">
        <button class = "button" id = "start">Get Started</button>
        </a>`   
    }).catch(err => {
      console.log(err)
    })
  }
  categories()
}


//function takes the weather description and assigns it a rating
const describeWeather = function(description) {
  
  let descripVar = 0
  let weathertype = 'fine'
  if (description < 300) {
    descripVar = 0
    weathertype = 'stormy'
    let descriptArr = [descripVar, weathertype]
    return descriptArr
  } else if (description < 500) {
    descripVar = 4
    weathertype = 'lightly raining'
    let descriptArr = [descripVar, weathertype]
    return descriptArr
  } else if (description < 600) {
    descripVar = 2
    weathertype = 'rainy'
    let descriptArr = [descripVar, weathertype]
    console.log(descriptArr)
    return descriptArr
  } else if (description < 700) {
    descripVar = 2
    weathertype = 'snowing'
    let descriptArr = [descripVar, weathertype]
    return descriptArr
  } else if (description < 800) {
    descripVar = 7
    weathertype = 'hazy'
    let descriptArr = [descripVar, weathertype]
    console.log(descriptArr)
    return descriptArr
  } else if (description === 800) {
    descripVar = 10
    weathertype = 'clear'
    let descriptArr = [descripVar, weathertype]
    console.log(descriptArr)
    return descriptArr
    
  
  } else {
    descripVar = 7
    weathertype = 'cloudy' 
    let descriptArr = [descripVar, weathertype]
    return descriptArr
  }
  
    
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
  let weatherStyleInt = hello[1]
  let weatherStyle = hello[2]
  let temp = hello[0]
  let myTemp = parseInt(hello)
  console.log(hello)
  if (hello[0] < 30) {
    temp = 1
  } else if (hello[0] < 40) {
    temp = 4
  } else if (hello[0] < 50) {
    temp = 8
  } else if (hello[0] < 60) {
    temp = 11
  } else {
    temp = 15   
  }
  console.log(weatherStyle)
  let bigNum = parseInt(Math.random() * 25 + hour + weatherStyleInt + temp + dayOfWeek)
  localStorage.setItem("bigNumber", bigNum)
  localStorage.setItem("temparature", myTemp)
  localStorage.setItem("atmosphere", weatherStyle)
  console.log(bigNum)
}











