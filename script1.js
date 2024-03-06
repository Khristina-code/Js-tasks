let button = document.querySelector('#button')
button.addEventListener('click', func1)
let elem = document.querySelector('#elem')
let paragraph = document.querySelector('#paragraph')

function func1() {
  paragraph.textContent = elem.value
}
