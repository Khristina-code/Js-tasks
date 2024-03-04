let button = document.querySelector('#button')
button.addEventListener('click', func1)
let elem1 = document.querySelector('#elem1')


function func1() {
  console.log(elem1.innerHTML)
  elem1.innerHTML = "<b>Hello Christy</b>"
}