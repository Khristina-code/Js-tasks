let button = document.querySelector('#button')
button.addEventListener('click', func1)
let image = document.querySelector('#image')
let paragraph = document.querySelector('#paragraph')


function func1() {
  paragraph.textContent = image.src
}