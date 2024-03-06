let button = document.querySelector('#button')
button.addEventListener('click', func1)
let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')
let elem4 = document.querySelector('#elem4')
let elem5 = document.querySelector('#elem5')
let paragraph = document.querySelector('#paragraph')

function func1() {
  let sum = Number(elem1.value) + Number(elem2.value) + Number(elem3.value) + Number(elem4.value) + Number(elem5.value)
  let res = sum / 5
  paragraph.textContent = res
}