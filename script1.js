let button1 = document.querySelector('#button')
button.addEventListener('click', func)
let elems = document.querySelectorAll('.elem')

function func() {
  for (let i = 0; i < elems.length; i++) {
    elems[i].textContent += i + 1
  }
}