let elem = document.querySelector('#elem')
let button = document.querySelector('#button')
let paragraph = document.querySelector('#paragraph')

button.addEventListener('click', function () {
  if (elem.checked) {
    paragraph.textContent = 'hello'
  } else {
    paragraph.textContent = 'bye'
  }
 
})


