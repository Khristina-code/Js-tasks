let elems = document.querySelectorAll('input[type="radio"]')
let paragraph = document.querySelector('#paragraph')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
  for (let elem of elems) {
    if (elem.checked) {
     paragraph.textContent = elem.value
    } else {
      paragraph.textContent = 'No radio button is selected'
   }
 }
})


