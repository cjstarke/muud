const bigNum = localStorage.getItem("bigNumber")
const tempReal =  localStorage.getItem("temparature")
const weatherStyle =  localStorage.setItem("atmosphere")
const mood = `happy`




sentence = document.querySelector(`#sentence`)
sentence.innerHTML = localStorage.getItem("atmosphere");