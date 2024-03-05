let button = document.querySelector('#button')
button.addEventListener('click', func1)
let link = document.querySelector('#link')
let paragraph = document.querySelector('#paragraph')


function func1() {
  paragraph.textContent = link.href
}