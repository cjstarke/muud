const nextLink = document.querySelector('#nextlink')
const diffButton = document.querySelector('#getmood')


diffButton.addEventListener("click", getMood = () => { 
  nextLink.innerHTML = `<a href="mood1.html">Get Started</a>`
})