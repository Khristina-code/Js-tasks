let button = document.querySelector('#button')
button.addEventListener('click', func1)
let elem = document.querySelector('#elem')


function func1() {
  elem.textContent = 'New paragraph'
  console.log(elem.textContent)
}