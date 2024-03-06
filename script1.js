let elem = document.querySelector('#elem')
let button = document.querySelector('#button')
button.addEventListener('click', func1)

function func1() {
  elem.className = 'example-class'
  console.log(elem.className)
}

	
