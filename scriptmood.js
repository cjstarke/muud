//const bigNum = localStorage.getItem("bigNumber")
const tempReal =  localStorage.getItem("temparature")
const weatherStyle =  localStorage.getItem("atmosphere")
const sentence = document.querySelector(`#sentence`)
const weatherSpan = document.querySelector('.weather')
const timeSpan = document.querySelector('.time')
const daySpan = document.querySelector('.day')
const tempSpan = document.querySelector(`.temp`)
const mood = localStorage.getItem("moodStored")
const BASE_URL = `https://api.giphy.com/v1/gifs/random?`
const API_KEY = `Wq7BuCPCVvqE56WBBzlB8cQqIpRPJlMN`
const gifDiv = document.querySelector('.gifdiv')
const dayOfWeek = function () {
  let date = new Date();
  let weekday = [];
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let thisDay = weekday[date.getDay()];
  return thisDay
}
const timeOfDay = function () {
  let date = new Date()
  let time = date.getHours()
  let describeTime = ' dawn'
  if (time < 6) {
    describeTime = ', early in the morning'
  } else if (time < 12) {
    describeTime = ' morning'
  } else if (time < 5) {
    describeTime = ' afternoon'
  } else if (time < 8) {
    describeTime = ' evening'
  } else {
    describeTime = ' night'
  }
return describeTime 
  
}
// dayOfWeek()
// timeOfDay()
const fillSentence = function () {
  let time = timeOfDay()
  let day = dayOfWeek()
  daySpan.innerHTML = day
  timeSpan.innerHTML = time
  weatherSpan.innerHTML = weatherStyle
  tempSpan.innerHTML = tempReal 
}
fillSentence()

let gifDisplay = async function () {
  await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=Wq7BuCPCVvqE56WBBzlB8cQqIpRPJlMN&tag=${mood}&rating=PG&lang=en`)
    .then(res => { 
      let gif = res.data.data.images.downsized_large.url
      gifDiv.innerHTML = `<img src= "${gif}"/>`
      console.log(mood)
      
  }).catch(err => {
    console.log(err)
  })
}
gifDisplay()


// sentence.innerHTML = localStorage.getItem("atmosphere");