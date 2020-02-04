const nextLink = document.querySelector('#nextlink')
const diffButton = document.querySelector('#getmood')
const bigNum = localStorage.getItem("bigNumber")
let mood = 'happy'
diffButton.addEventListener("click", getMood = () => { 
  if (bigNum < 20) {
    mood = 'tired'
    nextLink.innerHTML = `<a href="mood1.html">Get Mood</a>`
  } else if (bigNum < 30) {
    mood = 'depressed'
    nextLink.innerHTML = `<a href="mood2.html">Get Mood</a>`
  } else if (bigNum < 40) {
    mood = 'bored'
    nextLink.innerHTML = `<a href="mood3.html">Get Mood</a>`
  } else if (bigNum < 50) {
    mood = 'chill'
    nextLink.innerHTML = `<a href="mood4.html">Get Mood</a>`
  } else if (bigNum < 60) {
    mood = 'excited'
    nextLink.innerHTML = `<a href="mood5.html">Get Mood</a>`
  } else {
    nextLink.innerHTML = `<a href="mood6.html">Get Mood</a>`
    mood = 'crazy excited'
  } 
  localStorage.setItem("moodStored", mood)
})