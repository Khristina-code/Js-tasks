let button = document.querySelector('button')
button.addEventListener('click', func)
let elems = document.querySelectorAll('.elem')

function func() {
  for (let elem of elems) {
    elem.textContent = 'text'
  }
}