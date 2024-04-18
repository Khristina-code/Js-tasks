let elem = document.querySelector('#elem')
let button = document.querySelector('#button')
button.addEventListener('click', function () {
  if (elem.disabled) {
    console.log('інпут заблокований') 
  } else {
    console.log('інпут незаблокований')
  }
})


