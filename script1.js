let button = document.querySelector('#button')
button.addEventListener('click', func1)
let elem1 = document.querySelector('#elem1')


function func1() {
  let sum = Number(elem1.textContent) + 1
  elem1.textContent = sum
  console.log(sum)
}