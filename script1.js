let button = document.querySelector('#button')
button.addEventListener('click', func1)
let elem = document.querySelector('#elem')

function func1() {
  console.log(elem.value);
 elem.value = 'this is new text'
}
