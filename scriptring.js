const nextLink = document.querySelector('#nextlink')
const diffButton = document.querySelector('#getmood')
const newbody = document.querySelector(`body`)
const bigNum = localStorage.getItem("bigNumber")
let mood = 'happy'
diffButton.addEventListener("click", function () { newbody.setAttribute("class", "animate") })
diffButton.addEventListener("click", getMood = () => { 
  if (bigNum < 28) {
    mood = 'asleep'
    setTimeout(function () { nextLink.innerHTML = `<a href="mood1.html"><button class = "button" id = "start2">Get Mood</button></a>` }, 4000)
  } else if (bigNum < 38) {
    mood = 'depressed'
    setTimeout(function () { nextLink.innerHTML = `<a href="mood2.html"><button class = "button" id = "start2">Get Mood</button></a>` }, 4000)
  } else if (bigNum < 48) {
    mood = 'annoyed'
    setTimeout(function () { nextLink.innerHTML = `<a href="mood3.html"><button class = "button" id = "start2">Get Mood</button></a>` }, 4000)
  } else if (bigNum < 56) {
    mood = 'chill'
    setTimeout(function () { nextLink.innerHTML = `<a href="mood4.html"><button class = "button" id = "start2">Get Mood</button></a>` }, 4000)
  } else if (bigNum < 64) {
    mood = 'cheerful'
    setTimeout(function () { nextLink.innerHTML = `<a href="mood5.html"><button class = "button" id = "start2">Get Mood</button></a>` }, 4000)
  } else {
    setTimeout(function () { nextLink.innerHTML = `<a href="mood6.html"><button class = "button" id = "start2">Get Mood</button></a>` }, 4000)
    mood = 'crazy excited'
  } 
  localStorage.setItem("moodStored", mood)
})