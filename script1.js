let button = document.querySelector('#button')
button.addEventListener('click', func1)
let link = document.querySelector('#link')


function func1() {
  link.textContent = link.textContent + ' ' + '(' + link.href + ')'
}