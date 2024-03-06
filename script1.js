let button = document.querySelector('#button')
button.addEventListener('click', func1)
let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')

function func1() {
  let firstValue = elem1.value
  elem1.value = elem2.value;
  elem2.value = firstValue
}
