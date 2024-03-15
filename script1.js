let button = document.querySelector('#button')
button.addEventListener('click', func)
let elems = document.querySelectorAll('.elem')
let paragraph = document.querySelector('.paragraph')

function func() {
  let sum = 0
  for (let elem of elems) {
    sum += Number(elem.value)
  }
  paragraph.textContent = sum
}
