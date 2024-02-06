let button = document.querySelector('#button')
button.addEventListener('mouseover', func1)
button.addEventListener('mouseout', func2)

function func1() {
  console.log('hello')
}

function func2() {
  console.log('bye')
}