let button = document.querySelector('#button')
button.addEventListener('click', func1)
let elem = document.querySelector('#elem')
elem.textContent = 'Hello team'

function func1() {
  console.log(elem.textContent)
}